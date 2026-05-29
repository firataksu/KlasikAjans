<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Klasik Ajans — Proje Kuralları & Mimari Kararlar

> Bu dosya her konuşmada bağlam olarak yüklenir. Buradaki kurallar **kesindir** — sormadan değiştirme.

---

## Tech Stack

| Paket | Versiyon | Kritik Not |
|-------|----------|------------|
| Next.js | 16.2.6 | **Turbopack DEĞİL** — `--webpack` flag zorunlu |
| Payload CMS | 3.85.0 | v3 — v2 API'leri tamamen farklı |
| React | 19.2.4 | Server Components varsayılan |
| @payloadcms/next | 3.85.0 | RootLayout + handleServerFunctions gerekli |
| SQLite | local dev | `file:./klasik-ajans.db` |
| PostgreSQL | Vercel prod | `DATABASE_URI` postgresql:// ile başlarsa aktif |
| Tailwind CSS | v4 | `@import "tailwindcss"` + `@theme inline` sözdizimi |

---

## KRİTİK: Mimari Kararlar

### 1. Multiple Root Layouts — `src/app/layout.tsx` **OLMAMALI**

Payload CMS admin kendi `<html><body>` ağacını kurmak zorundadır (tema, dil, providers).
`app/layout.tsx` varsa Payload admin 500 hatası verir.

**Doğru yapı:**
```
src/app/
  (frontend)/layout.tsx   ← TAM root: <html><body> + fontlar + Navbar + Footer
  (payload)/layout.tsx    ← Payload RootLayout (kendi <html><body>'sini render eder)
  # app/layout.tsx YOK
```

**Yanlış — asla yapma:**
```
src/app/layout.tsx            ← BU DOSYA OLMAMALI
src/app/(payload)/layout.tsx  ← sadece {children} döndüren minimal — BU DA YANLIŞ
```

### 2. Dev Server Komutu

```bash
next dev --webpack    # DOĞRU
next dev              # YANLIŞ (Turbopack, Payload ile uyumsuz)
```

`package.json` `dev` scripti mutlaka `--webpack` içermeli.

### 3. Payload Layout Şablonu

`src/app/(payload)/layout.tsx` TAM OLARAK bu yapıda olmalı:

```tsx
import React from 'react'
import config from '@payload-config'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import { importMap } from './admin/importMap.js'

type Args = { children: React.ReactNode }

const serverFunction = async function (args: Parameters<typeof handleServerFunctions>[0]) {
  'use server'
  return handleServerFunctions({ ...args, config, importMap })
}

export default function PayloadLayout({ children }: Args) {
  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}
```

**Eksik olursa ne olur:**
- `serverFunction` eksik → "ServerFunctionsProvider requires a serverFunction prop" → 500
- `RootLayout` kullanılmazsa → "Cannot destructure property 'config'" → 500

### 4. Server vs Client Components

Server Component'lerde (varsayılan) şunlar **YASAK**:
- `onMouseEnter`, `onMouseLeave`, `onClick` gibi event handler prop'ları
- `useState`, `useEffect`, `useRef` gibi React hook'ları
- Tarayıcı API'leri (`window`, `document`, `localStorage`)

**Hover efektleri için CSS sınıfları kullan (`globals.css`'de tanımlı):**
```tsx
// YANLIŞ (Server Component'te)
<a onMouseEnter={() => setColor('#B3FF6B')}>link</a>

// DOĞRU
<a className="hover-lime">link</a>
```

**Client Component gereken dosyalar** — bunlar `'use client'` içermeli:
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/ContactForm.tsx`

---

## Design Tokens

```
Arka planlar:
  #0D0D0D   — ana (--background)
  #111111   — section (--sidebar)
  #171717   — kart (--card)
  #080808   — footer

Metin:
  #F0ECE4                  — ana (--foreground)
  rgba(240,236,228,0.5)    — muted
  rgba(240,236,228,0.35)   — soluk label

Vurgu (brand):
  #B3FF6B   — lime (--primary)
  #C8FF8C   — lime hover

Border:
  rgba(255,255,255,0.06)   — çok ince
  rgba(255,255,255,0.07)   — ince
  rgba(255,255,255,0.14)   — orta
```

**Fontlar:**
- `var(--font-playfair)` — h1/h2/h3 başlıklar (Playfair Display)
- `var(--font-inter)` — tüm gövde metni, label, buton (Inter)

---

## CSS Sınıfları (globals.css)

```
Butonlar:     .btn-lime  .btn-primary  .btn-outline
Kartlar:      .portfolio-card  .service-card  .home-service-card
Form:         .form-input  (lime focus ring)
Layout:       .section  .section-sm  .container  .divider
Etiketler:    .tag-lime  .tag-default
Hover (CSS):  .hover-lime  .section-link
Animasyon:    .fade-up  .fade-up-delay-1/2/3
```

---

## Dosya Yapısı

```
klasik-ajans/
├── src/
│   ├── app/
│   │   ├── (frontend)/
│   │   │   ├── layout.tsx       ← FULL root layout (html+body+fonts+nav+footer)
│   │   │   ├── page.tsx
│   │   │   ├── hizmetler/
│   │   │   ├── referanslar/
│   │   │   ├── hakkimizda/
│   │   │   └── iletisim/
│   │   ├── (payload)/
│   │   │   ├── layout.tsx       ← Payload RootLayout + handleServerFunctions
│   │   │   └── admin/
│   │   │       ├── importMap.js
│   │   │       └── [[...segments]]/page.tsx
│   │   └── api/[...slug]/route.ts
│   ├── components/
│   │   ├── Navbar.tsx           ← 'use client'
│   │   ├── Footer.tsx           ← 'use client'
│   │   ├── ContactForm.tsx      ← 'use client'
│   │   └── LogoKlasik.tsx
│   ├── collections/
│   ├── globals/
│   └── payload.config.ts
├── .claude/settings.json        ← Claude Code hooks (TypeScript otomatik kontrol)
├── scripts/
│   ├── pre-push.sh              ← git push öncesi kontrol scripti
│   └── claude-ts-check.sh       ← Claude hook için TypeScript kontrol scripti
└── package.json                 ← dev: "next dev --webpack"
```

---

## Çevre Değişkenleri

```bash
# .env.local (local dev)
DATABASE_URI=file:./klasik-ajans.db
PAYLOAD_SECRET=klasik-ajans-super-secret-key-change-in-production
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
CONTACT_EMAIL=info@klasikajans.com

# Vercel (production)
DATABASE_URI=postgresql://...
PAYLOAD_SECRET=<güçlü rastgele key>
NEXT_PUBLIC_SERVER_URL=https://klasik-ajans.vercel.app
```

---

## Bilinen Sorunlar & Çözümleri

| Hata | Neden | Çözüm |
|------|-------|-------|
| `/admin` 500 — "Cannot destructure 'config'" | `app/layout.tsx` var | `app/layout.tsx` sil |
| `/admin` 500 — "ServerFunctionsProvider requires serverFunction" | Eksik props | Tam şablonu uygula (bkz. §3) |
| "Event handlers cannot be passed" | Server Component'te event handler | CSS hover sınıfı veya `'use client'` ekle |
| Turbopack build hataları | `next dev` (Turbopack) kullanılıyor | `next dev --webpack` kullan |
| sharp not installed uyarısı | Config'e sharp geçilmemiş | `payload.config.ts`'e `sharp` import et |

---

## Performans Kuralları

- İmajlar: `next/image` kullan, `remotePatterns` ile domain beyaz listele
- Fontlar: `(frontend)/layout.tsx`'te `next/font/google` ile yükle
- `'use client'` sınırını minimumda tut — server'da kalabiliyorsa tut
- Animasyonlar: `globals.css` `.fade-up` sınıflarını kullan
