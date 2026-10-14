import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { siteConfig } from '../config/site.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const isDark = isHome && !scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/90 backdrop-blur-md border-b border-border-l'
          : isDark
            ? 'bg-transparent'
            : 'bg-ivory border-b border-transparent'
      }`}
    >
      <div className="container-content flex items-center justify-between h-16 md:h-18">
        <Logo light={isDark} />

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="Main navigation"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? isDark
                    ? 'text-white'
                    : 'text-electric'
                  : isDark
                    ? 'text-white/60 hover:text-white'
                    : 'text-steel-dark hover:text-midnight'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            to={siteConfig.cta.primary.path}
            size="sm"
            variant={isDark ? 'electric' : 'primary'}
          >
            {siteConfig.cta.primary.label}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 transition-colors ${isDark ? 'text-white' : 'text-midnight'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ivory border-t border-border-l">
          <nav
            className="container-content py-5 flex flex-col gap-0.5"
            aria-label="Mobile navigation"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-electric bg-electric/10'
                    : 'text-midnight hover:bg-electric/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button to={siteConfig.cta.primary.path} size="md" className="mt-3">
              {siteConfig.cta.primary.label}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
