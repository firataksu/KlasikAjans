/**
 * İçerik Yazarı Ajanı
 * Klasik Ajans web sitesi için Türkçe pazarlama metni üretir.
 *
 * Kullanım:
 *   npx tsx ajanslar/icerik-yazari.ts "Marka Kimliği Tasarımı" "KOBİ'ler" "profesyonel"
 *   npx tsx ajanslar/icerik-yazari.ts "<hizmet adı>" "<hedef kitle>" "<ton: profesyonel|samimi|enerjik>"
 */

import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const SYSTEM_PROMPT = `Sen Klasik Ajans için çalışan kıdemli bir Türkçe pazarlama metin yazarısın.
Klasik Ajans; marka kimliği, kurumsal iletişim, dijital tasarım ve reklam üretimi alanlarında hizmet veren bir kreatif ajans.

Görevin: Verilen hizmet için web sitesinde kullanılacak pazarlama metinleri üretmek.

Her istek için aşağıdaki çıktıyı üret:
1. Hero Başlık (max 8 kelime, güçlü ve akılda kalıcı)
2. Alt Başlık (max 20 kelime, faydayı öne çıkaran)
3. Hizmet Açıklaması (2-3 paragraf, ~150 kelime)
4. 3 Adet Öne Çıkan Fayda (madde madde, kısa ve net)
5. CTA Metni (buton için, max 5 kelime)

Kuralllar:
- Türkçe yaz, teknik jargondan kaçın
- Sektör argosunu değil, müşteri dilini kullan
- Fayda odaklı ol, özellik değil sonuç anlat
- Aktif ses kullan, emir kipi kullanma`;

async function icerikYaz(
  hizmetAdi: string,
  hedefKitle: string,
  ton: string
): Promise<void> {
  console.log(`\n📝 İçerik üretiliyor: "${hizmetAdi}"\n${"─".repeat(50)}\n`);

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
        content: `Hizmet: ${hizmetAdi}
Hedef Kitle: ${hedefKitle}
Ton: ${ton}

Bu hizmet için web sitesi pazarlama metinlerini oluştur.`,
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
    `Kullanım — Giriş: ${usage.input_tokens} token | Çıkış: ${usage.output_tokens} token`
  );
  if ("cache_read_input_tokens" in usage && usage.cache_read_input_tokens) {
    console.log(`Önbellekten okunan: ${usage.cache_read_input_tokens} token`);
  }
}

const args = process.argv.slice(2);

if (args.length < 1) {
  console.error(
    'Kullanım: npx tsx ajanslar/icerik-yazari.ts "<hizmet adı>" [hedef kitle] [ton]'
  );
  console.error('Örnek: npx tsx ajanslar/icerik-yazari.ts "Logo Tasarımı" "start-up\'lar" "enerjik"');
  process.exit(1);
}

const hizmetAdi = args[0];
const hedefKitle = args[1] ?? "işletmeler";
const ton = args[2] ?? "profesyonel";

icerikYaz(hizmetAdi, hedefKitle, ton).catch((err) => {
  if (err instanceof Anthropic.AuthenticationError) {
    console.error("Hata: ANTHROPIC_API_KEY geçersiz veya eksik.");
  } else if (err instanceof Anthropic.RateLimitError) {
    console.error("Hata: API istek limiti aşıldı, lütfen bekleyin.");
  } else {
    console.error("Beklenmeyen hata:", err.message);
  }
  process.exit(1);
});
