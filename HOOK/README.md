# Hook Dosyaları

Bu klasör projenin tüm hook dosyalarını içerir.

## Dosyalar

| Dosya | Açıklama |
|-------|----------|
| `settings.json` | Claude Code hook ayarları — `.claude/settings.json` olarak kopyala |
| `pre-push.sh` | Git push öncesi kontrol scripti |
| `claude-ts-check.sh` | Claude Code PostToolUse TypeScript kontrol scripti |

## Kurulum

### 1. Claude Code Hook (settings.json)

```bash
mkdir -p .claude
cp HOOK/settings.json .claude/settings.json
```

Ardından Claude Code'u yeniden başlat veya `/hooks` menüsünü aç.

### 2. Git Pre-Push Hook

```bash
npm run prepare
```

veya manuel:

```bash
cp HOOK/pre-push.sh .git/hooks/pre-push
chmod +x .git/hooks/pre-push
```

## Ne Yaparlar?

**`settings.json`** — Her `.ts` / `.tsx` dosyası düzenlendiğinde TypeScript'i otomatik kontrol eder. Hata varsa Claude'un ekranına yansıtılır, sormadan düzeltir.

**`pre-push.sh`** — `git push` öncesi şunları kontrol eder:
- TypeScript hataları
- ESLint hataları
- Payload mimari bütünlüğü (`app/layout.tsx` yok mu, `(payload)/layout.tsx` doğru mu)
- `console.log` uyarısı
- `.env` dosyası yanlışlıkla commit'e eklenmiş mi?
