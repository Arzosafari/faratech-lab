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

  // Header is transparent over the dark hero, becomes solid on scroll
  const isHome = location.pathname === '/'
  const isDark = isHome && !scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-border shadow-sm'
          : isDark
            ? 'bg-transparent'
            : 'bg-cream border-b border-transparent'
      }`}
    >
      <div className="container-content flex items-center justify-between h-16 md:h-20">
        <Logo light={isDark} />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? isDark ? 'text-white' : 'text-brand'
                  : isDark
                    ? 'text-white/70 hover:text-white'
                    : 'text-navy hover:text-brand'
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
            variant={isDark ? 'accent' : 'primary'}
          >
            {siteConfig.cta.primary.label}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 transition-colors ${isDark ? 'text-white' : 'text-navy'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-border">
          <nav className="container-content py-6 flex flex-col gap-1" aria-label="Mobile navigation">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-brand bg-brand-light'
                    : 'text-navy hover:bg-brand-light'
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
