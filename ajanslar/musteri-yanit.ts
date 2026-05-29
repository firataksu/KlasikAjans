/**
 * Müşteri Yanıt Uzmanı Ajanı
 * İletişim formundan gelen müşteri mesajlarını analiz eder ve profesyonel yanıt taslağı üretir.
 * Çoklu tur konuşmayı destekler — önceki mesajları bağlam olarak taşır.
 *
 * Kullanım:
 *   npx tsx ajanslar/musteri-yanit.ts "Merhaba, logo tasarımı için fiyat alabilir miyim?"
 *   echo "Müşteri mesajı" | npx tsx ajanslar/musteri-yanit.ts
 *   npx tsx ajanslar/musteri-yanit.ts --interaktif   (çok turlu sohbet modu)
 */

import Anthropic from "@anthropic-ai/sdk";
import readline from "readline";
import fs from "fs";

const client = new Anthropic();

const SYSTEM_PROMPT = `Sen Klasik Ajans'ın müşteri ilişkileri uzmanısın.
Klasik Ajans; marka kimliği, kurumsal iletişim, dijital tasarım ve reklam üretimi alanlarında hizmet veren bir İstanbul merkezli kreatif ajans.

Görevin: Gelen müşteri mesajlarını analiz et ve ajans adına profesyonel yanıt taslakları oluştur.

Yanıt formatın:
1. MESAJ ANALİZİ (kısaca: ne istiyor, ne aşamada, aciliyeti ne?)
2. ÖNERİLEN YANIT (e-posta formatında, kullanıma hazır)
3. TAKİP ÖNERİLERİ (ajansın ne yapması gerekiyor? ör: brifing formu gönder, meeting ayarla)

Yanıt yazarken dikkat et:
- Sıcak, profesyonel ve özgüvenli bir ton
- Müşteriye ismiyle hitap et (varsa)
- Klasik Ajans'ın güçlü yönlerini doğal olarak vurgula
- Net bir sonraki adım sun
- E-posta formatı: Konu satırı, selamlama, gövde, imza (Klasik Ajans Ekibi)
- 200-300 kelime aralığında tut

Klasik Ajans hizmetleri: Marka Kimliği, Kurumsal Kimlik, Logo Tasarım, Web Tasarım, Dijital Pazarlama, Sosyal Medya Yönetimi, Reklam Üretimi, Ambalaj Tasarımı.`;

async function tekMesajYanit(musteriMesaji: string): Promise<void> {
  console.log(`\n💌 Müşteri mesajı işleniyor...\n${"─".repeat(50)}\n`);

  const stream = await client.messages.stream({
    model: "claude-opus-4-8",
    max_tokens: 2048,
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
        content: `Gelen müşteri mesajı:\n\n"${musteriMesaji}"`,
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

async function interaktifMod(): Promise<void> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const konusmaTarihcesi: Anthropic.MessageParam[] = [];

  console.log("\n🤝 Müşteri Yanıt Uzmanı — İnteraktif Mod");
  console.log('Çıkmak için "çıkış" yazın veya Ctrl+C yapın.');
  console.log("─".repeat(50));

  const soru = (prompt: string): Promise<string> =>
    new Promise((resolve) => rl.question(prompt, resolve));

  while (true) {
    const giris = await soru("\nMüşteri mesajı: ");

    if (giris.toLowerCase() === "çıkış" || giris.toLowerCase() === "cikis") {
      console.log("\nGörüşmek üzere!");
      rl.close();
      break;
    }

    if (!giris.trim()) continue;

    konusmaTarihcesi.push({
      role: "user",
      content: `Gelen müşteri mesajı:\n\n"${giris}"`,
    });

    console.log("\n💌 Yanıt hazırlanıyor...\n");

    const stream = await client.messages.stream({
      model: "claude-opus-4-8",
      max_tokens: 2048,
      system: [
        {
          type: "text",
          text: SYSTEM_PROMPT,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: konusmaTarihcesi,
    });

    let tamYanit = "";
    for await (const text of stream.textStream) {
      process.stdout.write(text);
      tamYanit += text;
    }

    konusmaTarihcesi.push({
      role: "assistant",
      content: tamYanit,
    });

    console.log(`\n${"─".repeat(50)}`);
  }
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args[0] === "--interaktif") {
    await interaktifMod();
    return;
  }

  let mesaj = "";

  if (args.length > 0) {
    mesaj = args.join(" ");
  } else if (!process.stdin.isTTY) {
    mesaj = fs.readFileSync("/dev/stdin", "utf-8").trim();
  } else {
    console.error("Kullanım:");
    console.error(
      '  npx tsx ajanslar/musteri-yanit.ts "Müşteri mesajı buraya"'
    );
    console.error(
      "  npx tsx ajanslar/musteri-yanit.ts --interaktif  (çok turlu mod)"
    );
    console.error("  echo 'Mesaj' | npx tsx ajanslar/musteri-yanit.ts");
    process.exit(1);
  }

  await tekMesajYanit(mesaj);
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
