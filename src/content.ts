// Zentrale Inhalts-/Kontaktdaten der Website.
//
// Kontakt-/Impressumsdaten wurden am 2026-07-11/12 auf MKK-4 per
// strukturierter Rückfrage von der Geschäftsführung bestätigt:
// - Adresse/Telefon: aus dem eigenen Website-Entwurf (bilder-original/index.html),
//   NICHT von der Visitenkarte (die abweichende, ältere Angaben enthält).
// - Vollständiger Vorname: Michael (Visitenkarte nannte nur "M.").
// - E-Mail: mk-kfz@t-online.de (wie im ursprünglichen Auftragstext,
//   NICHT die abweichende Adresse auf der Visitenkarte).
// - Öffnungszeiten: "Nach Vereinbarung" (auf der Visitenkarte nicht vermerkt).
// - Leistungsliste: wie vorgeschlagen bestätigt.
//
// Der "Über uns"-Text (aboutText) ist seit 2026-07-14 final freigegeben:
// auf die gezielte Rückfrage aus MKK-6 (Ton/Länge/Inhalt/Formulierung?) hat
// die Geschäftsführung per Kommentar auf MKK-4 geantwortet: "Der Text
// bleibt so wie er ist." Der aktuelle Wortlaut ist damit bestätigt, keine
// weitere Änderung nötig.
//
// legalName am 2026-07-15 auf MKK-7 per verbindlicher Anweisung korrigiert:
// "Michael Krempl KFZ.-Meisterwerkstatt" (vorher fälschlich "... – Freie
// Porschewerkstatt"). Die auf MKK-7 ebenfalls verlangte Trennung von
// Firmensitz (Impressum/Datenschutz) und Werkstattadresse (Kontaktseite) ist
// am 2026-07-15 nach Rückfrage mit den von der Geschäftsführung genannten
// echten Adressen umgesetzt worden (Antwort auf die Rückfrage aus MKK-7).

export const business = {
  brandName: 'MK-KFZ',
  legalName: 'Michael Krempl KFZ.-Meisterwerkstatt',
  // Firmensitz: ladungsfähige Anschrift für Impressum und Datenschutz-Verantwortlichen.
  registeredOfficeStreet: 'Waldvögeleinstraße 4',
  registeredOfficeZipCity: '80995 München',
  // Werkstattadresse: abweichender Standort der Werkstatt, für Kontakt/Anfahrt.
  workshopStreet: 'Ingolstädter Straße 172, Halle 12',
  workshopZipCity: '80939 München',
  phone: '0172 8918193',
  email: 'mk-kfz@t-online.de',
  openingHours: 'Nach Vereinbarung',
  services: [
    'Inspektion & Wartung',
    'Sportwagen & Porsche',
    'Oldtimer',
    'Reifen & Räder',
    'HU-Vorbereitung',
    'Motor & Getriebe',
  ],
  // Rechtlich korrekte Impressumsangabe nach § 5 DDG i.V.m. § 27a UStG ist die
  // Umsatzsteuer-Identifikationsnummer, NICHT die Steuernummer. Michaels
  // Steuernummer (Finanzamt) ist zugleich seine private ESt-Nummer und wurde am
  // 2026-07-13 auf seine Weisung aus dem Impressum entfernt.
  vatId: 'DE198167489',
  handwerkskammer: 'Handwerkskammer für München und Oberbayern',
  handwerkskammerAdresse: 'Max-Joseph-Straße 4, 80333 München',
  berufsbezeichnung: 'Kfz-Techniker-Meister (verliehen in der Bundesrepublik Deutschland)',
  berufsrechtlicheRegelung: 'Handwerksordnung (HwO)',
  berufsrechtLink: 'https://www.gesetze-im-internet.de/hwo/',
}

// Final freigegeben am 2026-07-14 (siehe Kommentar oben).
export const aboutText =
  'Der Kfz-Meisterbetrieb MK-KFZ steht für unabhängige, ehrliche und fachkundige ' +
  'Fahrzeugtechnik – mit besonderer Erfahrung bei Porsche, Sportwagen und Oldtimern. ' +
  'Als Inhaber und Kfz-Meister betreue ich jeden Auftrag persönlich, ' +
  'vom Alltagsfahrzeug bis zum gepflegten Klassiker.'
