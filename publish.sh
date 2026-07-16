#!/usr/bin/env bash
# Veröffentlicht die mk-kfz-Website – NUR wenn das Rechts-Gate besteht.
# Läuft auf der Paperclip-VM; nutzt den eingesperrten Deploy-Schlüssel
# (~/.ssh/deploy_mkkfz), der auf dem VPS ausschließlich rsync ins Webroot darf.
set -euo pipefail
cd "$(dirname "$0")"

VPS_HOST="78.46.217.168"
VPS_USER="michael"
KEY="$HOME/.ssh/deploy_mkkfz"

echo "→ Build"
npm run build

echo "→ Rechts-Gate"
if ! ./check_legal.sh dist; then
  echo "ABBRUCH: Rechts-Gate nicht bestanden – es wird NICHT veröffentlicht." >&2
  exit 1
fi

echo "→ Upload (nur rsync, eingesperrtes Verzeichnis)"
rsync -a --delete -e "ssh -i $KEY -o BatchMode=yes -o StrictHostKeyChecking=accept-new" \
  dist/ "$VPS_USER@$VPS_HOST":

echo "→ Live-Test"
for p in "" impressum datenschutz kontakt; do
  code=$(curl -s -m 12 -o /dev/null -w '%{http_code}' "https://mk-kfz.net/$p")
  printf '   /%-12s → HTTP %s\n' "$p" "$code"
done
echo "→ Backup nach GitHub"
git add -A
git commit -m "Website-Deploy $(date +'%F %H:%M')" || echo "  (nichts zu committen)"
if git push origin main 2>&1; then
  echo "  ✓ nach GitHub gesichert"
else
  echo "  WARN: GitHub-Push fehlgeschlagen – Website ist trotzdem live, Backup nachholen."
fi

echo "✓ Veröffentlicht: https://mk-kfz.net"
