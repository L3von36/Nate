import { Link } from 'react-router-dom'
import { MapPin, Globe, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-xl font-bold text-accent mb-3">Terraline</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Ethiopia-based consulting engineers specializing in highway design, transport infrastructure,
            and geotechnical engineering.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-widest text-primary-foreground/60 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/services', label: 'Our Services' },
              { to: '/#team', label: 'Team' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-widest text-primary-foreground/60 mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <Phone size={14} className="shrink-0 text-accent" />
              <a href="tel:+251911635001" className="hover:text-accent transition-colors">+251 911 635 001</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="shrink-0 text-accent" />
              <a href="tel:+251911935348" className="hover:text-accent transition-colors">+251 911 935 348</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="shrink-0 text-accent" />
              <a href="mailto:info@terralineengineering.com" className="hover:text-accent transition-colors">
                info@terralineengineering.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0 text-accent" />
              Hayahulet Area, Addis Ababa
            </li>
            <li className="flex items-center gap-2">
              <Globe size={14} className="shrink-0 text-accent" />
              <a
                href="https://www.terralineengineering.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                www.terralineengineering.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/40">
        &copy; {new Date().getFullYear()} Terraline Consulting Engineers. All rights reserved.
      </div>
    </footer>
  )
}
