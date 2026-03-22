import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: null, label: 'Team', hash: 'team' },
  { to: '/contact', label: 'Contact' },
]

function TeamLink({ className, onClick }) {
  return (
    <a
      href="#team"
      className={className}
      onClick={(e) => {
        e.preventDefault()
        const el = document.getElementById('team')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        if (onClick) onClick()
      }}
    >
      Team
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-heading font-bold text-lg text-accent tracking-wide">
            Terraline
          </span>
          <span className="text-xs text-primary-foreground/70 tracking-widest uppercase">
            Consulting Engineers
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label, hash }) => {
            if (hash) {
              return (
                <TeamLink
                  key={label}
                  className="text-sm font-medium tracking-wide transition-colors duration-200 text-primary-foreground/80 hover:text-primary-foreground"
                />
              )
            }
            return (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-accent'
                      : 'text-primary-foreground/80 hover:text-primary-foreground'
                  }`
                }
              >
                {label}
              </NavLink>
            )
          })}
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-4 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label, hash }) => {
            if (hash) {
              return (
                <TeamLink
                  key={label}
                  className="text-sm font-medium text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                />
              )
            }
            return (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-accent' : 'text-primary-foreground/80'}`
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            )
          })}
        </div>
      )}
    </header>
  )
}
