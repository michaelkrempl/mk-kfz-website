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
// Der "Über uns"-Text (aboutText) wurde am 2026-07-12 final freigegeben,
// nachdem "geprüfter" vor "Kfz-Meister" auf Wunsch der Geschäftsführung
// gestrichen wurde — siehe Commit d0ef026.

export const business = {
  brandName: 'MK-KFZ',
  legalName: 'Michael Krempl – Freie Porschewerkstatt',
  street: 'Ingolstädter Str. 172, Halle 12',
  zipCity: '80939 München',
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

// "Über uns"-Text, von der Geschäftsführung auf MKK-4 freigegeben
// (Korrektur: "geprüfter" vor "Kfz-Meister" gestrichen).
export const aboutText =
  'Der Kfz-Meisterbetrieb MK-KFZ steht für unabhängige, ehrliche und fachkundige ' +
  'Fahrzeugtechnik – mit besonderer Erfahrung bei Porsche, Sportwagen und Oldtimern. ' +
  'Als Inhaber und Kfz-Meister betreue ich jeden Auftrag persönlich, ' +
  'vom Alltagsfahrzeug bis zum gepflegten Klassiker.'
