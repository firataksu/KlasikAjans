/**
 * Sosyal Medya Editör Ajanı
 * Proje veya hizmet açıklamasından platform bazlı sosyal medya paylaşımları üretir.
 *
 * Kullanım:
 *   npx tsx ajanslar/sosyal-medya.ts "Defne Restaurant için yeni marka kimliği tasarladık"
 *   npx tsx ajanslar/sosyal-medya.ts "<proje veya hizmet açıklaması>" [instagram|linkedin|twitter|hepsi]
 */

import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const SYSTEM_PROMPT = `Sen Klasik Ajans'ın sosyal medya editörüsün.
Klasik Ajans; marka kimliği, kurumsal iletişim, dijital tasarım ve reklam üretimi alanlarında hizmet veren bir kreatif ajans.

Verilen proje veya hizmet için platforma özel sosyal medya içerikleri oluştur:

## Instagram
- Görsel odaklı, duygusal ve ilham verici bir dil
- Kısa giriş cümlesi (dikkat çekici)
- 2-3 paragraf (soru + değer + harekete geçirme)
- 15-20 adet hashtag (Türkçe + İngilizce karışık, sektörel + genel)
- Emoji kullan ama abartma

## LinkedIn
- Profesyonel ve düşündürücü ton
- Hook cümlesi (ilk 2 satırda okuyucuyu yakala)
- 3-5 paragraf (bağlam → çalışma süreci → sonuç → öğrenme)
- 3-5 hashtag (sektörel, profesyonel)
- CTA: yorum veya bağlantı daveti

## Twitter / X
- 280 karakteri geçmeyen 3 farklı tweet seçeneği
- Her biri farklı açıdan yaklaşsın (merak/değer/soru)
- İlgili hashtag (max 2 adet)

Tüm içerikler Türkçe olsun. Ajansın tonunu yansıtsın: özgüvenli ama kibirli değil, yaratıcı ama sade.`;

async function sosyalMedyaUret(
  aciklama: string,
  platform: string
): Promise<void> {
  const platformYazi =
    platform === "hepsi" ? "tüm platformlar" : platform.toUpperCase();
  console.log(
    `\n📱 Sosyal medya içeriği üretiliyor (${platformYazi})...\n${"─".repeat(50)}\n`
  );

  const platformTalimat =
    platform === "hepsi"
      ? "Instagram, LinkedIn ve Twitter/X için içerik üret."
      : `Sadece ${platform.toUpperCase()} için içerik üret.`;

  const stream = await client.messages.stream({
    model: "claude-opus-4-8",
    max_tokens: 4096,
    system: [
      {
        type: "text",
        text: SYSTEM_PROMPT,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [
      {
        role: "user",
        content: `Proje/Hizmet: ${aciklama}

${platformTalimat}`,
      },
    ],
  });

  for await (const text of stream.textStream) {
    process.stdout.write(text);
  }

  const finalMessage = await stream.finalMessage();
  const usage = finalMessage.usage;

  console.log(`\n\n${"─".repeat(50)}`);
  console.log(
    `Kullanım — Giriş: ${usage.input_tokens} | Çıkış: ${usage.output_tokens} token`
  );
}

const args = process.argv.slice(2);

if (args.length < 1) {
  console.error("Kullanım:");
  console.error(
    '  npx tsx ajanslar/sosyal-medya.ts "<proje açıklaması>" [instagram|linkedin|twitter|hepsi]'
  );
  console.error(
    '  npx tsx ajanslar/sosyal-medya.ts "Defne Restaurant rebranding projesi"'
  );
  process.exit(1);
}

const aciklama = args[0];
const gecerliPlatformlar = ["instagram", "linkedin", "twitter", "hepsi"];
const platform = args[1]?.toLowerCase() ?? "hepsi";

if (!gecerliPlatformlar.includes(platform)) {
  console.error(
    `Geçersiz platform: "${platform}". Seçenekler: instagram, linkedin, twitter, hepsi`
  );
  process.exit(1);
}

sosyalMedyaUret(aciklama, platform).catch((err) => {
  if (err instanceof Anthropic.AuthenticationError) {
    console.error("Hata: ANTHROPIC_API_KEY geçersiz veya eksik.");
  } else if (err instanceof Anthropic.RateLimitError) {
    console.error("Hata: API istek limiti aşıldı.");
  } else {
    console.error("Beklenmeyen hata:", err.message);
  }
  process.exit(1);
});
