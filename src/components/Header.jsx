import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Logo from './Logo.jsx'
import { siteConfig } from '../config/site.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isActive = (path) => location.pathname === path

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'border-b border-line bg-ink/80 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <div className="container-content flex h-16 items-center justify-between gap-6 md:h-20">
          <Logo />

          {/* Desktop navigation — utility micro-typography */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`label transition-colors duration-300 hover:!text-mist ${
                  isActive(item.path) ? '!text-mist' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to={siteConfig.cta.primary.path}
              className="group hidden items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-[13px] font-semibold text-mist transition-colors duration-300 hover:border-mist hover:bg-white/5 sm:inline-flex"
            >
              {siteConfig.cta.primary.label}
              <ArrowUpRight size={15} />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="label inline-flex items-center gap-2 !text-mist transition-opacity hover:opacity-70 lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-500 lg:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav
          className="container-content flex h-full flex-col justify-center gap-1 pb-20 pt-20"
          aria-label="Mobile navigation"
        >
          {siteConfig.nav.map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              className="group flex items-baseline justify-between border-b border-line py-5"
            >
              <span className="text-3xl font-bold tracking-tight text-mist transition-colors group-hover:text-ember">
                {item.label}
              </span>
              <span className="label">{String(i + 1).padStart(2, '0')}</span>
            </Link>
          ))}
          <Link
            to={siteConfig.cta.primary.path}
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-mist px-7 py-3.5 text-sm font-semibold text-ink"
          >
            {siteConfig.cta.primary.label}
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </>
  )
}
