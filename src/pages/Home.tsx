import { Link } from 'react-router-dom'
import { business } from '../content'
import { usePageMeta } from '../hooks/usePageMeta'
import heroPorsche from '../assets/fotos/hero-porsche.jpg'
import werkstattHebebuehne from '../assets/fotos/werkstatt-porsche-hebebuehne.jpg'
import werkstattRadBremse from '../assets/fotos/werkstatt-rad-bremse.jpg'
import werkstattMacan from '../assets/fotos/werkstatt-macan.jpg'
import werkstattDiagnose from '../assets/fotos/werkstatt-diagnose.jpg'
import werkstattOldtimerMotor from '../assets/fotos/werkstatt-oldtimer-motor.jpg'
import werkstattMotorraum from '../assets/fotos/werkstatt-motorraum.jpg'

const gallery = [
  { src: werkstattHebebuehne, alt: 'Porsche auf der Hebebühne bei der Fahrwerksarbeit' },
  { src: werkstattDiagnose, alt: 'Fahrzeug bei der Diagnose in der Werkstatt' },
  { src: werkstattMacan, alt: 'Porsche Macan vor der Werkstatt' },
  { src: werkstattRadBremse, alt: 'Rad- und Bremsenservice auf der Hebebühne' },
  { src: werkstattOldtimerMotor, alt: 'Oldtimer mit geöffneter Motorhaube in der Werkstatt' },
  { src: werkstattMotorraum, alt: 'Geöffneter Motorraum bei der Fahrzeugaufbereitung' },
]

export function Home() {
  usePageMeta(
    'Kfz-Werkstatt in Ihrer Nähe',
    'Ihre Kfz-Werkstatt für Inspektion, Reparatur und Service. Termin schnell und unkompliziert anfragen.',
  )

  return (
    <div>
      <section className="blueprint-grid border-b border-hairline">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-24">
          <div>
            <p className="eyebrow">Kfz-Meisterbetrieb · München</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Ihr Fahrzeug
              <br />
              in Meisterhand
            </h1>
            <p className="mt-6 max-w-md text-lg text-ink-soft">
              Unabhängige Werkstatt für Inspektion, Service und Instandsetzung – mit besonderer
              Erfahrung bei Porsche, Sportwagen und Oldtimern. Persönlich betreut vom Inhaber.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${business.email}`}
                className="border border-steel bg-steel px-6 py-3 font-mono text-xs tracking-[0.12em] text-paper uppercase transition-colors hover:bg-steel-dark"
              >
                Termin per E-Mail anfragen
              </a>
              <a
                href={`tel:${business.phone}`}
                className="border border-hairline px-6 py-3 font-mono text-xs tracking-[0.12em] text-ink uppercase transition-colors hover:border-steel hover:text-steel"
              >
                {business.phone}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="border border-hairline bg-white p-2 shadow-sm">
              <img
                src={heroPorsche}
                alt="Fahrzeug in der MK-KFZ Werkstatt"
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            <div className="job-tag absolute -bottom-5 -left-4 px-4 py-3 sm:-left-8">
              <p>Werkstatt-Auftrag</p>
              <p className="mt-1 text-[13px] tracking-normal text-ink normal-case">
                {business.brandName} · München
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="eyebrow">Leistungen</p>
        <h2 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
          Unsere Leistungen im Überblick
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft">
          Details zu jeder Leistung finden Sie auf der{' '}
          <Link to="/leistungen" className="text-steel underline underline-offset-4">
            Leistungen-Seite
          </Link>
          .
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {business.services.map((service) => (
            <li
              key={service}
              className="border-l-2 border-l-transparent bg-paper px-5 py-4 text-ink transition-colors hover:border-l-steel"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="eyebrow">Einblicke</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
            Aus der Werkstatt
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {gallery.map((photo) => (
              <div key={photo.src} className="border border-hairline bg-white p-1.5 shadow-sm">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-paper-raised">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="eyebrow">Erreichbarkeit</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
            Öffnungszeiten
          </h2>
          <p className="mt-4 text-lg text-ink-soft">{business.openingHours}</p>
        </div>
      </section>
    </div>
  )
}
