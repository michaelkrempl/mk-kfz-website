import { business } from '../content'
import { usePageMeta } from '../hooks/usePageMeta'
import { PageHeader } from '../components/PageHeader'

export function Datenschutz() {
  usePageMeta('Datenschutzerklärung', `Datenschutzerklärung von ${business.brandName}.`)

  return (
    <div>
      <PageHeader eyebrow="Datenschutz" title="Datenschutzerklärung" />

      <div className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-ink-soft sm:px-6">
        <section>
          <h2 className="eyebrow">1. Verantwortliche Stelle</h2>
          <p className="mt-2 text-ink">{business.legalName}</p>
          <p className="text-ink">{business.registeredOfficeStreet}</p>
          <p className="text-ink">{business.registeredOfficeZipCity}</p>
          <p className="text-ink">E-Mail: {business.email}</p>
        </section>

        <section>
          <h2 className="eyebrow">2. Hosting und Server-Logdateien</h2>
          <p className="mt-2">
            Beim Aufruf dieser Website erhebt der Hosting-Anbieter automatisch technische
            Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite,
            Browsertyp), die zur technischen Bereitstellung der Website und zur Gewährleistung
            der Systemsicherheit erforderlich sind (Art. 6 Abs. 1 lit. f DSGVO). Diese Daten
            werden nicht mit anderen Datenquellen zusammengeführt.
          </p>
        </section>

        <section>
          <h2 className="eyebrow">3. Kontaktaufnahme</h2>
          <p className="mt-2">
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur Bearbeitung
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert (Art. 6 Abs. 1
            lit. b DSGVO). Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
        </section>

        <section>
          <h2 className="eyebrow">4. Anfahrtskarte (Google Maps)</h2>
          <p className="mt-2">
            Auf der Seite „Kontakt &amp; Anfahrt“ binden wir eine Karte des Dienstes Google Maps
            (Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) ein.
            Beim Aufruf dieser Seite stellt Ihr Browser eine Verbindung zu Servern von Google her,
            wobei auch Ihre IP-Adresse übertragen werden kann. Weitere Informationen zur
            Datenverarbeitung durch Google finden Sie in der{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-steel underline underline-offset-4"
            >
              Datenschutzerklärung von Google
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="eyebrow">5. Keine Cookies, kein Tracking</h2>
          <p className="mt-2">
            Diese Website setzt keine Cookies und keine Analyse- oder Tracking-Tools ein.
          </p>
        </section>

        <section>
          <h2 className="eyebrow">6. Ihre Rechte</h2>
          <p className="mt-2">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
            Verarbeitung Ihrer personenbezogenen Daten sowie ein Recht auf Datenübertragbarkeit
            und Beschwerde bei einer Aufsichtsbehörde. Wenden Sie sich hierzu an die oben
            genannte verantwortliche Stelle.
          </p>
        </section>
      </div>
    </div>
  )
}
