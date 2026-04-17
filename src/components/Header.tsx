'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/about' },
  { label: 'Resume', href: '/resume' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-sm shadow-[0_1px_0_rgba(26,27,31,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="Jonathan Evans — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/Logo.png"
            alt="Jonathan Evans"
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {nav.map(({ label, href }) => {
            const active = href === '/#work' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={`font-sans text-sm tracking-wide transition-colors duration-200 ${
                  active ? 'text-accent' : 'text-ink/60 hover:text-ink'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <a
            href="https://www.linkedin.com/in/jonathanhevans/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm tracking-wide text-ink/60 hover:text-ink transition-colors duration-200"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:jonathan@jonathan-evans.com"
            aria-label="Email Jonathan"
            className="flex items-center text-ink/60 hover:text-ink transition-colors duration-200"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/Mail Icon.png" alt="" className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-px bg-ink transition-transform duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[5px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-transform duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 bg-bg/98 backdrop-blur-sm ${
          menuOpen ? 'max-h-64 border-t border-ink/8' : 'max-h-0'
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-5" aria-label="Mobile navigation">
          {nav.map(({ label, href }) => {
            const active = href === '/#work' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`font-sans text-base transition-colors duration-200 ${
                  active ? 'text-accent' : 'text-ink/60'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <a
            href="https://www.linkedin.com/in/jonathanhevans/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-base text-ink/60"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:jonathan@jonathan-evans.com"
            className="font-sans text-base text-ink/60 flex items-center gap-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/Mail Icon.png" alt="" className="h-5 w-auto opacity-60" />
            jonathan@jonathan-evans.com
          </a>
        </nav>
      </div>
    </header>
  )
}
