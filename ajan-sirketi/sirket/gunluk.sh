#!/usr/bin/env bash
# Şirket günlüğüne tek satır yazar. Her zaman ana klasördeki sirket/gunluk.jsonl dosyasına yazar,
# çalışan kendi masasındayken çağırsa bile.
# Kullanım: bash sirket/gunluk.sh <kim> <olay> "<detay>"
# Olaylar: kurulum ise_alim masa baslangic yardimci bitis birlesme onay_istegi onay ret durdu
set -e

if [ "$#" -lt 3 ]; then
  echo "kullanim: bash sirket/gunluk.sh <kim> <olay> \"<detay>\"" >&2
  exit 1
fi

kim="$1"
olay="$2"
shift 2
detay="$*"

case "$olay" in
  kurulum|ise_alim|masa|baslangic|yardimci|bitis|birlesme|onay_istegi|onay|ret|durdu) ;;
  *) echo "bilinmeyen olay: $olay" >&2; exit 1 ;;
esac

ortak="$(git rev-parse --path-format=absolute --git-common-dir 2>/dev/null || true)"
if [ -n "$ortak" ]; then
  kok="$(cd "$ortak/.." && pwd)"
else
  kok="$(cd "$(dirname "$0")/.." && pwd)"
fi

kacir() {
  printf '%s' "$1" | sed -e 's/\\/\\\\/g' -e 's/"/\\"/g' | tr '\r\n\t' '   '
}

t="$(date -Iseconds)"
printf '{"t":"%s","kim":"%s","olay":"%s","detay":"%s"}\n' \
  "$t" "$(kacir "$kim")" "$(kacir "$olay")" "$(kacir "$detay")" >> "$kok/sirket/gunluk.jsonl"
