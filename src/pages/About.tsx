import { aboutText, business } from '../content'
import { usePageMeta } from '../hooks/usePageMeta'
import { PageHeader } from '../components/PageHeader'
import ueberUnsImg from '../assets/fotos/ueber-uns-oldtimer.jpg'

export function About() {
  usePageMeta('Über uns', `Lernen Sie ${business.brandName} und unser Team kennen.`)

  return (
    <div>
      <PageHeader eyebrow="Über uns" title="Kfz-Meisterbetrieb mit persönlicher Betreuung" />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="border border-hairline bg-white p-2 shadow-sm">
          <img
            src={ueberUnsImg}
            alt="Oldtimer in der MK-KFZ Werkstatt"
            className="w-full object-cover"
          />
        </div>

        <p className="mt-8 text-lg leading-relaxed text-ink-soft">{aboutText}</p>
      </div>
    </div>
  )
}
