#!/usr/bin/env bash
# Klasik Ajans — Claude Code PostToolUse Hook
# Write/Edit aracından sonra TypeScript hatalarını otomatik kontrol eder.
# Hata varsa Claude'un context'ine enjekte edilir → sormadan düzeltir.
#
# INPUT (stdin): { "tool_input": { "file_path": "/abs/path/to/file.tsx" }, ... }
# OUTPUT:        JSON { hookSpecificOutput: { additionalContext: "..." } }  (sadece hata varsa)

INPUT=$(cat)
FILE=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty' 2>/dev/null || echo "")

PROJECT_DIR="/Users/firataksu/Desktop/KlasikWebSite/klasik-ajans"

# Sadece projedeki TS/TSX dosyaları için çalış
case "$FILE" in
  "$PROJECT_DIR"/*.ts|"$PROJECT_DIR"/*.tsx|\
  "$PROJECT_DIR"/src/*.ts|"$PROJECT_DIR"/src/*.tsx|\
  "$PROJECT_DIR"/src/**/*.ts|"$PROJECT_DIR"/src/**/*.tsx)
    ;;
  *)
    # TS/TSX ama project path kontrolü — bash'te ** çalışmadığında fallback
    if [[ "$FILE" != *.ts && "$FILE" != *.tsx ]]; then
      exit 0
    fi
    if [[ "$FILE" != "$PROJECT_DIR"* ]]; then
      exit 0
    fi
    ;;
esac

# TypeScript kontrolü çalıştır
TS_OUTPUT=$(cd "$PROJECT_DIR" && npx tsc --noEmit 2>&1 || true)
ERROR_LINES=$(echo "$TS_OUTPUT" | grep "error TS" || true)
ERROR_COUNT=$(echo "$ERROR_LINES" | grep -c "error TS" 2>/dev/null || echo "0")

if [ "$ERROR_COUNT" -gt "0" ]; then
  # İlk 20 hata satırını al
  TRIMMED=$(echo "$ERROR_LINES" | head -20)
  if [ "$ERROR_COUNT" -gt "20" ]; then
    TRIMMED="$TRIMMED\n... ve $((ERROR_COUNT - 20)) hata daha."
  fi
  CONTEXT="TypeScript $ERROR_COUNT hata bulundu — düzeltilmeli:\n$TRIMMED"
  echo "{\"hookSpecificOutput\":{\"hookEventName\":\"PostToolUse\",\"additionalContext\":$(printf '%s' "$CONTEXT" | jq -Rs .)}}"
fi
