import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Mail } from 'lucide-react'
import Logo from './Logo.jsx'
import { siteConfig } from '../config/site.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep text-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      <div className="container-content py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-5 text-white/60 text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-brand transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-brand transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-brand transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
              Navigate
            </h3>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
              Get in Touch
            </h3>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-lg text-white hover:text-brand-light transition-colors font-medium"
            >
              {siteConfig.contact.email}
            </a>
            <p className="mt-3 text-sm text-white/50 leading-relaxed">
              Have a project in mind? We'd love to hear about it.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {year} FaraTech. All rights reserved.
          </p>
          <Link to="/privacy" className="text-sm text-white/40 hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
