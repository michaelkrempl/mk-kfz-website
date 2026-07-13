# mk-kfz-website

Statische Marketing-Website für die Kfz-Werkstatt MK-KFZ (getrennt von der
Werkstatt-Auftragsverwaltungs-App). Ziel: schlichte, moderne, vertrauenswürdige
Präsenz mit Leistungsübersicht und klarem Weg zur Kontaktaufnahme.

Siehe Issue MKK-4 für den Auftrag und offene Rückfragen zu Inhalten.

## Stack

- React 19 + TypeScript + Vite
- React Router (Client-seitiges Routing)
- Tailwind CSS 4
- oxlint

## Seiten

- `/` – Startseite
- `/leistungen` – Leistungen
- `/ueber-uns` – Über uns
- `/kontakt` – Kontakt & Anfahrt
- `/impressum` – Impressum
- `/datenschutz` – Datenschutzerklärung

## Inhalte

Alle Geschäftsdaten (Adresse, Telefon, Öffnungszeiten, Leistungsliste, exakte
Firmierung, Logo/Fotos) liegen zentral in `src/content.ts`. Felder, die noch
nicht von der Geschäftsführung bestätigt sind, stehen bewusst auf `null` und
werden im UI als "Inhalt ausstehend" markiert statt mit erfundenen Daten
gefüllt zu werden — insbesondere auf den rechtlich verpflichtenden Seiten
Impressum und Datenschutzerklärung.

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build     # tsc -b && vite build, Ausgabe in dist/
npm run preview   # Produktions-Build lokal ansehen
npm run lint       # oxlint
```

**Hinweis:** Diese Umgebung setzt `NODE_ENV=production`, wodurch `npm install`
standardmäßig devDependencies überspringt. `.npmrc` (`production=false`)
stellt sicher, dass Build-Tooling (Vite, TypeScript, Tailwind, oxlint) trotzdem
installiert wird.

## Deployment (auf MKK-4 mit der Geschäftsführung geklärt, Stand 2026-07-13)

- **Domain:** mk-kfz.net (bereits registriert bei IONOS, A-Record zeigt auf
  den eigenen Hetzner-VPS 78.46.217.168). Muss nicht neu beschafft werden.
- **Hosting:** derselbe Hetzner-VPS (Ubuntu + nginx), auf dem aktuell ein
  Platzhalter ("Meine Webseite") läuft. Deployment ist reines Kopieren von
  `dist/` nach `/var/www` plus TLS via Let's Encrypt — kein neuer Anbieter.
- **Versionierung:** privates GitHub-Repo, aber **nur zur Versionierung**.
  Bewusst **kein Auto-Deploy/CI auf den VPS** — das würde einem GitHub-Token
  Schreibzugriff auf den Produktivserver geben. Veröffentlichung erfolgt
  ausschließlich manuell per rsync durch die Geschäftsführung, nach expliziter
  Freigabe.
- **Go-Live-Blocker:** keine mehr offen. Umsatzsteuer-Identifikationsnummer
  (NICHT die private Steuernummer) und Handwerkskammer (München und
  Oberbayern) sind seit 2026-07-13 im Impressum eingetragen, beides auf
  MKK-4 bestätigt. Die Seite ist seit 2026-07-13 live unter mk-kfz.net.
- **Repo-Zugriff:** github.com/michaelkrempl/mk-kfz-website (privat) ist
  jetzt die maßgebliche Quelle. Die lokale Historie wurde neu aufgesetzt
  (frischer `git init`, ein sauberer Initial-Commit vom bereinigten Stand),
  weil eine ältere Historie eine Steuernummer enthielt — siehe MKK-6.
  Deployment bleibt ausschließlich manueller Schritt der Geschäftsführung
  (`./deploy.sh`, rsync auf den VPS) — kein SSH-/CI-Zugriff für Agenten.
