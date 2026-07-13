import { business } from '../content'
import { usePageMeta } from '../hooks/usePageMeta'
import { PageHeader } from '../components/PageHeader'

export function Contact() {
  const mapsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent(business.street + ', ' + business.zipCity)

  usePageMeta(
    'Kontakt & Anfahrt',
    `Kontaktieren Sie ${business.brandName}: Adresse, Telefon, E-Mail und Öffnungszeiten.`,
  )

  return (
    <div>
      <PageHeader eyebrow="Kontakt" title="Kontakt & Anfahrt" />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-7">
            <div>
              <h2 className="eyebrow">Adresse</h2>
              <p className="mt-2 text-lg text-ink">
                {business.street}
                <br />
                {business.zipCity}
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Telefon</h2>
              <a
                href={`tel:${business.phone}`}
                className="mt-2 block text-lg text-steel underline underline-offset-4"
              >
                {business.phone}
              </a>
            </div>

            <div>
              <h2 className="eyebrow">E-Mail</h2>
              <a
                href={`mailto:${business.email}`}
                className="mt-2 block text-lg text-steel underline underline-offset-4"
              >
                {business.email}
              </a>
            </div>

            <div>
              <h2 className="eyebrow">Öffnungszeiten</h2>
              <p className="mt-2 text-lg text-ink">{business.openingHours}</p>
            </div>
          </div>

          <div>
            <h2 className="eyebrow">Anfahrt</h2>
            <p className="mt-2 text-ink-soft">
              {business.street}, {business.zipCity}
            </p>
            <a
              className="mt-4 inline-block border border-hairline bg-white px-5 py-3 text-ink shadow-sm transition hover:bg-surface-soft"
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Route planen (öffnet Google Maps)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
