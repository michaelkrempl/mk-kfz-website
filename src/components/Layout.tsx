import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { business } from '../content'

const navItems = [
  { to: '/', label: 'Startseite' },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/kontakt', label: 'Kontakt & Anfahrt' },
]

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 border-b border-hairline bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-display text-xl font-bold tracking-tight text-ink">
              {business.brandName}
            </span>
            <span className="eyebrow hidden sm:inline">Meisterbetrieb</span>
          </Link>

          <nav className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `font-mono text-xs uppercase tracking-[0.12em] transition-colors hover:text-ink ${
                    isActive ? 'text-ink' : 'text-ink-soft'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a
            href={`mailto:${business.email}`}
            className="hidden border border-steel bg-steel px-5 py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-paper transition-colors hover:bg-steel-dark md:inline-block"
          >
            Termin anfragen
          </a>

          <button
            type="button"
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
            className="border border-hairline p-2 text-ink md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-hairline bg-paper md:hidden">
            <ul className="flex flex-col px-4 py-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2.5 font-mono text-xs uppercase tracking-[0.12em] ${
                        isActive ? 'text-ink' : 'text-ink-soft'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="block py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-steel"
                  onClick={() => setMenuOpen(false)}
                >
                  Termin anfragen
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-hairline bg-paper-raised">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} {business.brandName} — {business.legalName}
          </p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-ink">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-ink">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
