#!/usr/bin/env bash
# Rechts-Gate für die mk-kfz-Website. Prüft den fertigen Build (dist/) auf die
# bekannten Abmahnfallen. Exit 0 = bestanden, Exit 1 = Veröffentlichung verboten.
#
# WICHTIG: Das ist ein Sicherheitsnetz gegen BEKANNTE Fehler, KEINE Rechtsberatung
# und KEINE Garantie gegen Abmahnungen. Es ersetzt keinen Anwalt.
set -uo pipefail
cd "$(dirname "$0")"

DIST="${1:-dist}"
fail=0
say() { printf '%s\n' "$1"; }
bad() { printf '  ✗ %s\n' "$1"; fail=1; }
ok()  { printf '  ✓ %s\n' "$1"; }

if [ ! -d "$DIST" ]; then
  say "ABBRUCH: Verzeichnis '$DIST' fehlt – erst bauen (npm run build)."; exit 1
fi
if [ -z "$(find "$DIST" -name '*.js' -print -quit)" ]; then
  bad "Build ist leer (keine JS-Dateien) – nichts zu veröffentlichen."
fi

say "Rechts-Gate mk-kfz.net – Prüfung des Builds ($DIST)"

# 1. Keine Steuernummer (Format DD/DDD/DDDDD) – niemals ins Impressum
if grep -rqE '[0-9]{2,3}/[0-9]{3}/[0-9]{4,5}' "$DIST" --include=*.js --include=*.html; then
  bad "Steuernummern-Muster gefunden – Steuernummer gehört NICHT auf die Seite."
else ok "keine Steuernummer"; fi

# 2. Keine ungefragt ladenden Dritt-Einbettungen (DSGVO)
if grep -rqiE 'maps\.google|output=embed|<iframe' "$DIST" --include=*.js --include=*.html; then
  bad "Eingebettete Karte/iframe gefunden – Karte nur als Klick-Link (kein Auto-Load)."
else ok "keine eingebettete Karte / kein iframe"; fi
if grep -rqiE 'fonts\.googleapis|fonts\.gstatic|googletagmanager|google-analytics|connect\.facebook|cdn\.jsdelivr|unpkg\.com' "$DIST" --include=*.js --include=*.html --include=*.css; then
  bad "Externer Font-/Script-/CDN-Host gefunden – Assets müssen lokal liegen."
else ok "keine externen Fonts/Skripte/CDNs"; fi

# 3. Impressum-Pflichtangaben vorhanden
need() { if grep -rqF "$1" "$DIST" --include=*.js --include=*.html; then ok "$2"; else bad "$2 FEHLT"; fi; }
need "Michael Krempl Kfz.-Meisterbetrieb" "Firmenname"
need "Waldvögeleinstraße 4"                 "Firmensitz (Impressum)"
need "Ingolstädter Straße 172"              "Werkstattadresse (Kontakt)"
need "Handwerkskammer"                       "Handwerkskammer"
need "Kfz-Techniker-Meister"                 "Berufsbezeichnung"
need "Handwerksordnung"                      "berufsrechtliche Regelung (HwO)"
if grep -rqE 'DE[0-9]{9}' "$DIST" --include=*.js; then ok "USt-IdNr. vorhanden"; else bad "USt-IdNr. FEHLT"; fi

# 4. Alter Firmenname darf nicht mehr auftauchen
if grep -rqiE 'Freie Porschewerkstatt|Meisterwerkstatt' "$DIST"; then
  bad "Alter Firmenname noch im Build."
else ok "alter Firmenname nicht mehr vorhanden"; fi

# 5. Datenschutztext muss zur Realität passen (Karte/Google Maps)
map_embed=0; grep -rqiE 'output=embed|maps\.google[^"]*embed|<iframe' "$DIST" --include=*.js --include=*.html && map_embed=1
text_autoconnect=0; grep -rqi 'stellt Ihr Browser eine Verbindung zu Servern von Google' "$DIST" --include=*.js && text_autoconnect=1
text_maps=0; grep -rqi 'Google Maps' "$DIST" --include=*.js && text_maps=1
map_link=0; grep -rqiE 'maps/dir|Route planen' "$DIST" --include=*.js && map_link=1

if [ "$text_autoconnect" = 1 ] && [ "$map_embed" = 0 ]; then
  bad "Datenschutz beschreibt eine automatische Google-Verbindung/Einbettung, die es nicht (mehr) gibt."
elif [ "$map_embed" = 1 ] && [ "$text_autoconnect" = 0 ]; then
  bad "Karte ist eingebettet, aber der Datenschutztext nennt keine automatische Datenübertragung an Google."
elif [ "$map_link" = 1 ] && [ "$text_maps" = 0 ]; then
  bad "Google-Maps-Link vorhanden, aber im Datenschutz nicht erwähnt."
else
  ok "Datenschutztext und Karten-Verhalten sind konsistent"
fi

echo
if [ "$fail" -ne 0 ]; then
  say "GATE NICHT BESTANDEN – Veröffentlichung blockiert. Erst die ✗-Punkte beheben."
  say "(Sicherheitsnetz gegen bekannte Fehler, keine Rechtsberatung.)"
  exit 1
fi
say "Gate bestanden. (Kein Ersatz für anwaltliche Prüfung von Impressum/Datenschutz.)"
exit 0
