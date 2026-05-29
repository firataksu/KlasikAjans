#!/usr/bin/env bash
# Klasik Ajans — Pre-Push Kontrol Scripti
# git push öncesi otomatik çalışır.
# Kurulum: npm run prepare

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"

RED='\033[0;31m'
YEL='\033[0;33m'
GRN='\033[0;32m'
DIM='\033[2m'
NC='\033[0m'

fail() { echo -e "${RED}✗ $1${NC}"; exit 1; }
warn() { echo -e "${YEL}⚠  $1${NC}"; }
ok()   { echo -e "${GRN}✓${NC} $1"; }
info() { echo -e "${DIM}  → $1${NC}"; }

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo " Klasik Ajans — Pre-Push Kontroller"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# ── 1. Kritik dosya kontrolü ─────────────────────────────────────────────────
info "Mimari kontrol ediliyor..."

# app/layout.tsx OLMAMALI (multiple root layouts pattern)
if [ -f "src/app/layout.tsx" ]; then
  fail "src/app/layout.tsx mevcut!\n  Bu dosya Payload admin'i bozar.\n  Çözüm: sil ve (frontend)/layout.tsx + (payload)/layout.tsx kullan."
fi

# (payload)/layout.tsx RootLayout içermeli
if [ ! -f "src/app/(payload)/layout.tsx" ]; then
  fail "src/app/(payload)/layout.tsx eksik! Payload admin çalışmaz."
fi
if ! grep -q "RootLayout" "src/app/(payload)/layout.tsx"; then
  fail "src/app/(payload)/layout.tsx RootLayout kullanmıyor.\n  Çözüm: AGENTS.md §3'teki şablonu uygula."
fi
if ! grep -q "serverFunction" "src/app/(payload)/layout.tsx"; then
  fail "src/app/(payload)/layout.tsx serverFunction prop'u içermiyor.\n  Çözüm: AGENTS.md §3'teki şablonu uygula."
fi

# (frontend)/layout.tsx tam root layout olmalı
if [ ! -f "src/app/(frontend)/layout.tsx" ]; then
  fail "src/app/(frontend)/layout.tsx eksik! Frontend sayfalar render edilemez."
fi
if ! grep -q "<html" "src/app/(frontend)/layout.tsx"; then
  fail "src/app/(frontend)/layout.tsx <html> etiketi içermiyor — tam root layout değil."
fi

ok "Mimari doğru"

# ── 2. Dev scripti kontrolü ──────────────────────────────────────────────────
info "package.json kontrol ediliyor..."
if ! grep -q '"dev".*--webpack' "package.json"; then
  fail "package.json dev scripti --webpack flag'i içermiyor.\n  Çözüm: \"dev\": \"next dev --webpack\""
fi
ok "Dev scripti --webpack içeriyor"

# ── 3. TypeScript kontrolü ───────────────────────────────────────────────────
info "TypeScript kontrol ediliyor..."
TS_OUTPUT=$(npx tsc --noEmit 2>&1 || true)
TS_ERROR_LINES=$(echo "$TS_OUTPUT" | grep "error TS" || true)
TS_ERRORS=0
[ -n "$TS_ERROR_LINES" ] && TS_ERRORS=$(echo "$TS_ERROR_LINES" | wc -l | tr -d ' ')

if [ "$TS_ERRORS" -gt 0 ]; then
  echo ""
  echo "$TS_ERROR_LINES" | head -15
  echo ""
  fail "TypeScript $TS_ERRORS hata bulundu. Push iptal edildi."
fi
ok "TypeScript temiz"

# ── 4. ESLint kontrolü ───────────────────────────────────────────────────────
info "ESLint kontrol ediliyor..."
LINT_OUTPUT=$(npx eslint src/ --max-warnings 0 2>&1 || true)
LINT_ERROR_LINES=$(echo "$LINT_OUTPUT" | grep -E "^\s+[0-9]+:[0-9]+\s+error" || true)
LINT_ERRORS=0
[ -n "$LINT_ERROR_LINES" ] && LINT_ERRORS=$(echo "$LINT_ERROR_LINES" | wc -l | tr -d ' ')

if [ "$LINT_ERRORS" -gt 3 ]; then
  echo ""
  echo "$LINT_OUTPUT" | head -20
  echo ""
  fail "ESLint $LINT_ERRORS hata bulundu. Push iptal edildi."
fi
ok "ESLint temiz"

# ── 5. console.log uyarısı (sadece uyarı, durdurmaz) ─────────────────────────
info "console.log kontrol ediliyor..."
CONSOLE_HITS=$(grep -rn "console\.log\b" src/ --include="*.ts" --include="*.tsx" 2>/dev/null \
  | grep -v "// " | grep -v "payload.logger" || true)
if [ -n "$CONSOLE_HITS" ]; then
  warn "Üretim kodunda console.log var (push devam ediyor):"
  echo "$CONSOLE_HITS" | head -5 | sed 's/^/     /'
fi

# ── 6. Hardcoded localhost uyarısı ────────────────────────────────────────────
info "Hardcoded URL kontrol ediliyor..."
HARDCODED=$(grep -rn "localhost:3000" src/ --include="*.ts" --include="*.tsx" 2>/dev/null \
  | grep -v "// " | grep -v "process.env" || true)
if [ -n "$HARDCODED" ]; then
  warn "Hardcoded localhost:3000 URL'si var:"
  echo "$HARDCODED" | head -3 | sed 's/^/     /'
fi

# ── 7. .env dosyası push edilmeye çalışılıyor mu? ─────────────────────────────
STAGED_ENV=$(git diff --cached --name-only 2>/dev/null | grep "^\.env" || true)
if [ -n "$STAGED_ENV" ]; then
  fail ".env dosyası commit'e eklenmiş:\n  $STAGED_ENV\n  Gizli bilgiler repo'ya yüklenemez!"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e " ${GRN}✅ Tüm kontroller geçti — push devam ediyor${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
