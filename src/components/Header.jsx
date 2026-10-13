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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-border shadow-sm'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <div className="container-content flex items-center justify-between h-16 md:h-20">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'text-accent'
                  : 'text-navy hover:text-accent'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to={siteConfig.cta.primary.path} size="sm">
            {siteConfig.cta.primary.label}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-navy hover:text-accent transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="container-content py-6 flex flex-col gap-1" aria-label="Mobile navigation">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-accent bg-navy-light'
                    : 'text-navy hover:bg-navy-light'
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
