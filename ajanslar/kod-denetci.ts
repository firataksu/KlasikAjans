/**
 * Kod Denetçi Ajanı
 * Next.js / React / TypeScript dosyalarını projeye özel kurallara göre denetler.
 * AGENTS.md ve CLAUDE.md kurallarını bilir — proje konvansiyonlarını zorlar.
 *
 * Kullanım:
 *   npx tsx ajanslar/kod-denetci.ts src/components/Navbar.tsx
 *   npx tsx ajanslar/kod-denetci.ts src/app/(frontend)/page.tsx
 *   npx tsx ajanslar/kod-denetci.ts --dizin src/components   (tüm dizini tara)
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const client = new Anthropic();

const PROJE_KURALLARI = `# Klasik Ajans Proje Kuralları

## Stack
- Next.js 16.2.6 (webpack, TURBOPACK DEĞİL)
- Payload CMS v3.85 + React 19 + Tailwind CSS v4

## Kritik Mimari
- src/app/layout.tsx OLMAMALI (multiple root layouts pattern)
- (frontend)/layout.tsx: TAM root (html+body+fonts+Navbar+Footer)
- (payload)/layout.tsx: Payload RootLayout + handleServerFunctions + ServerFunctionClient

## Server vs Client Components
Server Component yasak:
- onMouseEnter/Leave/Click gibi event handler prop
- useState, useEffect, useRef React hook'ları
- window, document, localStorage browser API
- Hover için CSS sınıfları kullan: .hover-lime .section-link

Client Component olması gerekenler ('use client' direktifi):
- Navbar.tsx, Footer.tsx, ContactForm.tsx
- Herhangi bir interactive bileşen

## CSS / Design
- Tailwind v4: @import "tailwindcss" + @theme inline sözdizimi
- Tanımlı CSS sınıflar: .btn-lime .btn-primary .btn-outline
- .portfolio-card .service-card .home-service-card
- .form-input .section .section-sm .container .divider
- .tag-lime .tag-default .hover-lime .section-link .fade-up

## Performans
- İmajlar: next/image kullan, remotePatterns ile whitelist
- Fontlar: (frontend)/layout.tsx'te next/font/google ile yükle
- 'use client' sınırını minimumda tut
- Animasyonlar: globals.css .fade-up sınıflarını kullan`;

const SYSTEM_PROMPT = `Sen Next.js, React ve TypeScript konusunda uzman kıdemli bir yazılım mühendisisin.
Aşağıda Klasik Ajans projesinin kuralları verilmiştir. Bu kurallara göre kod denetimi yapacaksın.

${PROJE_KURALLARI}

## Denetim Çıktısı Formatı

Her dosya için şu bölümleri üret:

### ✅ İyi Uygulamalar
Doğru yapılan şeyleri listele (motivasyon için önemli)

### ❌ Kritik Sorunlar
Derleme/çalışma zamanı hataları, güvenlik açıkları, mimari ihlaller
Her sorun için: Satır numarası → Sorun açıklaması → Düzeltilmiş kod

### ⚠️ Uyarılar
Performans sorunları, erişilebilirlik eksiklikleri, anti-pattern kullanımlar
Her uyarı için: Satır numarası → Uyarı → Öneri

### 💡 İyileştirme Önerileri
Zorunlu olmayan ama kodun kalitesini artıracak öneriler

### 📊 Özet Puan
Kritik sorun: X | Uyarı: Y | Genel durum: İYİ/ORTA/GELİŞTİRİLMELİ

Teknik terimler için İngilizce kullanabilirsin ama açıklamaları Türkçe yaz.`;

async function dosyaDenetle(dosyaYolu: string): Promise<void> {
  const tamYol = path.resolve(process.cwd(), dosyaYolu);

  if (!fs.existsSync(tamYol)) {
    console.error(`Hata: Dosya bulunamadı: ${tamYol}`);
    return;
  }

  const icerik = fs.readFileSync(tamYol, "utf-8");
  const uzanti = path.extname(dosyaYolu);

  if (![".ts", ".tsx", ".js", ".jsx"].includes(uzanti)) {
    console.warn(`Uyarı: ${dosyaYolu} TypeScript/JavaScript dosyası değil, atlanıyor.`);
    return;
  }

  console.log(`\n🔍 Denetleniyor: ${dosyaYolu}\n${"─".repeat(50)}\n`);

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
        content: `Dosya yolu: ${dosyaYolu}

\`\`\`${uzanti.slice(1)}
${icerik}
\`\`\`

Bu dosyayı proje kurallarına göre denetle.`,
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

function dizindenDosyalariTopla(dizinYolu: string): string[] {
  const tamYol = path.resolve(process.cwd(), dizinYolu);

  if (!fs.existsSync(tamYol)) {
    console.error(`Hata: Dizin bulunamadı: ${tamYol}`);
    process.exit(1);
  }

  const sonuclar: string[] = [];

  function tara(mevcut: string): void {
    const girdi = fs.readdirSync(mevcut);
    for (const dosya of girdi) {
      const tamDosya = path.join(mevcut, dosya);
      const stat = fs.statSync(tamDosya);
      if (stat.isDirectory() && !dosya.startsWith(".") && dosya !== "node_modules") {
        tara(tamDosya);
      } else if ([".ts", ".tsx"].includes(path.extname(dosya))) {
        sonuclar.push(path.relative(process.cwd(), tamDosya));
      }
    }
  }

  tara(tamYol);
  return sonuclar;
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("Kullanım:");
    console.error("  npx tsx ajanslar/kod-denetci.ts <dosya-yolu>");
    console.error("  npx tsx ajanslar/kod-denetci.ts --dizin <dizin-yolu>");
    console.error("Örnekler:");
    console.error("  npx tsx ajanslar/kod-denetci.ts src/components/Navbar.tsx");
    console.error("  npx tsx ajanslar/kod-denetci.ts --dizin src/components");
    process.exit(1);
  }

  if (args[0] === "--dizin" && args[1]) {
    const dosyalar = dizindenDosyalariTopla(args[1]);
    console.log(`\n📁 ${args[1]} dizininde ${dosyalar.length} dosya bulundu.\n`);

    for (const dosya of dosyalar) {
      await dosyaDenetle(dosya);
      console.log("\n");
    }
  } else {
    await dosyaDenetle(args[0]);
  }
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
