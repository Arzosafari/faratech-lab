import { Link } from 'react-router-dom'
import { ArrowUpRight, Instagram, Linkedin, Mail } from 'lucide-react'
import Logo from './Logo.jsx'
import Reveal from './Reveal.jsx'
import { siteConfig } from '../config/site.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-deep">
      {/* Massive full-width call to action — font scale matching the hero */}
      <div className="container-content pb-16 pt-24 md:pb-20 md:pt-32">
        <Reveal>
          <Link to="/contact" className="group block">
            <p className="label mb-8">Start a project</p>
            <h2 className="display">
              Have an idea?
              <br />
              <span className="gradient-text">Let's build it.</span>
            </h2>
            <span className="mt-10 inline-flex items-center gap-3 text-sm font-semibold text-mist">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong transition-colors duration-300 group-hover:border-mist group-hover:bg-white/5">
                <ArrowUpRight size={18} />
              </span>
              {siteConfig.contact.email}
            </span>
          </Link>
        </Reveal>
      </div>

      {/* Minimal 4-column grid behind a hairline */}
      <div className="container-content hairline py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="body-text mt-5 max-w-[15rem]">{siteConfig.description}</p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer navigation">
            <p className="label mb-1">Navigate</p>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-mist-dim transition-colors hover:text-mist"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="label mb-1">Contact</p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-sm text-mist-dim transition-colors hover:text-mist"
            >
              Email us
            </a>
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-mist-dim transition-colors hover:text-mist"
            >
              Instagram
            </a>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-mist-dim transition-colors hover:text-mist"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="label mb-1">Legal</p>
            <Link
              to="/privacy"
              className="text-sm text-mist-dim transition-colors hover:text-mist"
            >
              Privacy
            </Link>
            <div className="mt-2 flex items-center gap-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-mist-dim transition-colors hover:border-line-strong hover:text-mist"
              >
                <Mail size={15} />
              </a>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-mist-dim transition-colors hover:border-line-strong hover:text-mist"
              >
                <Instagram size={15} />
              </a>
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-mist-dim transition-colors hover:border-line-strong hover:text-mist"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="hairline mt-12 flex flex-col gap-2 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label">© {year} FaraTech</p>
          <p className="label">Your Ideas. Our Technology. Infinite Possibilities.</p>
        </div>
      </div>
    </footer>
  )
}
