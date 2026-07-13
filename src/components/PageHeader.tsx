interface PageHeaderProps {
  eyebrow: string
  title: string
  intro?: string
}

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <div className="border-b border-hairline bg-paper-raised">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        {intro && <p className="mt-4 max-w-2xl text-ink-soft">{intro}</p>}
      </div>
    </div>
  )
}
