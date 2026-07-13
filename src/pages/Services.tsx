import { business } from '../content'
import { usePageMeta } from '../hooks/usePageMeta'
import { PageHeader } from '../components/PageHeader'
import leistungenImg from '../assets/fotos/leistungen-hebebuehne.jpg'

export function Services() {
  usePageMeta(
    'Leistungen',
    `Werkstattleistungen von ${business.brandName}: Inspektion, Reparatur, Service und mehr.`,
  )

  return (
    <div>
      <PageHeader
        eyebrow="Leistungen"
        title="Werkstattleistungen"
        intro="Eine Übersicht unserer Leistungen rund um Inspektion, Service und Instandsetzung."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <ul className="grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 md:grid-cols-1">
            {business.services.map((service) => (
              <li
                key={service}
                className="border-l-2 border-l-transparent bg-paper px-5 py-4 text-ink transition-colors hover:border-l-steel"
              >
                {service}
              </li>
            ))}
          </ul>
          <div className="border border-hairline bg-white p-2 shadow-sm">
            <img
              src={leistungenImg}
              alt="Fahrzeug auf der Hebebühne in der MK-KFZ Werkstatt"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
