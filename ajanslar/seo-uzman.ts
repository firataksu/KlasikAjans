/**
 * SEO Uzman Ajanı
 * Verilen sayfa içeriği veya konu için tam SEO paketi üretir.
 *
 * Kullanım:
 *   npx tsx ajanslar/seo-uzman.ts "Marka Kimliği Hizmetleri | Klasik Ajans"
 *   npx tsx ajanslar/seo-uzman.ts --dosya src/app/(frontend)/hizmetler/page.tsx
 *   echo "sayfa içeriği" | npx tsx ajanslar/seo-uzman.ts
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";

const client = new Anthropic();

const SYSTEM_PROMPT = `Sen Türkiye pazarı için uzmanlaşmış bir SEO danışmanısın.
Müşteri: Klasik Ajans — marka kimliği, kurumsal iletişim, dijital tasarım ve reklam ajansı.
Web sitesi: Next.js ile yapılmış, Türkçe içerik.

Verilen sayfa başlığı veya içeriği için eksiksiz bir SEO paketi oluştur:

1. <title> etiketi (50-60 karakter, anahtar kelime içermeli, | Klasik Ajans ile bitir)
2. meta description (150-160 karakter, kullanıcıyı tıklatacak, anahtar kelime içermeli)
3. H1 başlığı (60-70 karakter, sayfa başlığından farklı, SEO dostu)
4. Ana anahtar kelimeler (5-7 adet, arama hacmi yüksek Türkçe terimler)
5. LSI anahtar kelimeleri (ilgili terimler, 5 adet)
6. Open Graph meta etiketleri (og:title, og:description, og:type)
7. Twitter Card meta etiketleri
8. Schema.org yapılandırılmış veri — JSON-LD (LocalBusiness veya Service şeması)
9. İç linkleme önerileri (sitedeki hangi sayfalarla bağlantı kurulmalı)

Çıktıyı kod blokları içinde ver, kullanıma hazır olsun.
Açıklamaları Türkçe yaz.`;

async function seoAnaliz(icerik: string): Promise<void> {
  const ozet = icerik.length > 100 ? icerik.slice(0, 100) + "…" : icerik;
  console.log(`\n🔍 SEO paketi oluşturuluyor: "${ozet}"\n${"─".repeat(50)}\n`);

  const stream = await client.messages.stream({
    model: "claude-opus-4-8",
    max_tokens: 8192,
    thinking: { type: "adaptive" },
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
        content: `Aşağıdaki sayfa için eksiksiz SEO paketi oluştur:\n\n${icerik}`,
      },
    ],
  });

  for await (const event of stream) {
    if (
      event.type === "content_block_delta" &&
      event.delta.type === "text_delta"
    ) {
      process.stdout.write(event.delta.text);
    }
  }

  const finalMessage = await stream.finalMessage();
  const usage = finalMessage.usage;

  console.log(`\n\n${"─".repeat(50)}`);
  console.log(
    `Kullanım — Giriş: ${usage.input_tokens} | Çıkış: ${usage.output_tokens} token`
  );
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  let icerik = "";

  if (args[0] === "--dosya" && args[1]) {
    if (!fs.existsSync(args[1])) {
      console.error(`Hata: Dosya bulunamadı: ${args[1]}`);
      process.exit(1);
    }
    icerik = fs.readFileSync(args[1], "utf-8");
  } else if (args.length > 0) {
    icerik = args.join(" ");
  } else if (!process.stdin.isTTY) {
    icerik = fs.readFileSync("/dev/stdin", "utf-8").trim();
  } else {
    console.error("Kullanım:");
    console.error(
      '  npx tsx ajanslar/seo-uzman.ts "Sayfa başlığı veya konusu"'
    );
    console.error("  npx tsx ajanslar/seo-uzman.ts --dosya <dosya-yolu>");
    console.error("  echo 'içerik' | npx tsx ajanslar/seo-uzman.ts");
    process.exit(1);
  }

  await seoAnaliz(icerik);
}

main().catch((err) => {
  if (err instanceof Anthropic.AuthenticationError) {
    console.error("Hata: ANTHROPIC_API_KEY geçersiz veya eksik.");
  } else if (err instanceof Anthropic.RateLimitError) {
    console.error("Hata: API istek limiti aşıldı.");
  } else {
    console.error("Beklenmeyen hata:", err.message);
  }
  process.exit(1);
});
