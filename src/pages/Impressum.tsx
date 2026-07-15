import { business } from '../content'
import { usePageMeta } from '../hooks/usePageMeta'
import { PageHeader } from '../components/PageHeader'

export function Impressum() {
  usePageMeta('Impressum', `Impressum von ${business.brandName} gemäß § 5 DDG.`)

  return (
    <div>
      <PageHeader eyebrow="Angaben gemäß § 5 DDG" title="Impressum" />

      <div className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-ink-soft sm:px-6">
        <section>
          <h2 className="eyebrow">Anbieter</h2>
          <p className="mt-2 text-ink">{business.legalName}</p>
          <p className="text-ink">{business.registeredOfficeStreet}</p>
          <p className="text-ink">{business.registeredOfficeZipCity}</p>
        </section>

        <section>
          <h2 className="eyebrow">Kontakt</h2>
          <p className="mt-2 text-ink">Telefon: {business.phone}</p>
          <p className="text-ink">E-Mail: {business.email}</p>
        </section>

        {business.vatId && (
          <section>
            <h2 className="eyebrow">Umsatzsteuer-Identifikationsnummer</h2>
            <p className="mt-2 text-ink">{business.vatId}</p>
          </section>
        )}

        {business.handwerkskammer && (
          <section>
            <h2 className="eyebrow">Zuständige Handwerkskammer</h2>
            <p className="mt-2 text-ink">{business.handwerkskammer}</p>
            <p className="text-ink">{business.handwerkskammerAdresse}</p>
          </section>
        )}

        <section>
          <h2 className="eyebrow">Berufsbezeichnung</h2>
          <p className="mt-2 text-ink">{business.berufsbezeichnung}</p>
        </section>

        <section>
          <h2 className="eyebrow">Berufsrechtliche Regelung</h2>
          <p className="mt-2 text-ink">
            {business.berufsrechtlicheRegelung} &ndash; einsehbar unter{' '}
            <a
              className="underline"
              href={business.berufsrechtLink}
              target="_blank"
              rel="noreferrer"
            >
              gesetze-im-internet.de/hwo
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
