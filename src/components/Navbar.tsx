'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import LogoKlasik from './LogoKlasik'

const navLinks = [
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/referanslar', label: 'Referanslar' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: scrolled ? 'rgba(13,13,13,0.92)' : '#0D0D0D',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        transition: 'background-color 250ms ease, backdrop-filter 250ms ease',
      }}
    >
      <div className="container">
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '68px',
          }}
        >
          <Link href="/" aria-label="Klasik Ajans Ana Sayfa" style={{ display: 'flex', alignItems: 'center' }}>
            <LogoKlasik size="md" variant="light" />
          </Link>

          {/* Desktop menü */}
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '13.5px',
                      fontWeight: isActive ? 600 : 450,
                      letterSpacing: '0.025em',
                      color: isActive ? '#F0ECE4' : 'rgba(240,236,228,0.55)',
                      textDecoration: 'none',
                      position: 'relative',
                      paddingBottom: '3px',
                      transition: 'color 150ms ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#F0ECE4'
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,236,228,0.55)'
                    }}
                  >
                    {link.label}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: isActive ? '100%' : '0',
                        height: '1.5px',
                        backgroundColor: '#B3FF6B',
                        transition: 'width 220ms cubic-bezier(0.22, 1, 0.36, 1)',
                        borderRadius: '1px',
                      }}
                    />
                  </Link>
                </li>
              )
            })}
            <li>
              <Link
                href="/iletisim"
                className="btn-lime"
                style={{ padding: '0.5rem 1.2rem', fontSize: '13px', borderRadius: '6px' }}
              >
                Projeyi Konuşalım
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç/kapat"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              padding: '8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '1.5px',
                  backgroundColor: '#F0ECE4',
                  borderRadius: '1px',
                  transition: 'transform 220ms ease, opacity 200ms ease',
                  transform:
                    menuOpen && i === 0
                      ? 'rotate(45deg) translate(2px, 5px)'
                      : menuOpen && i === 2
                        ? 'rotate(-45deg) translate(2px, -5px)'
                        : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </nav>
      </div>

      {/* Mobil drawer */}
      <div
        style={{
          backgroundColor: '#0D0D0D',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          overflow: 'hidden',
          maxHeight: menuOpen ? '360px' : '0',
          transition: 'max-height 320ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <ul
          className="container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '1.5rem',
            paddingBottom: '2rem',
            gap: '1.25rem',
            listStyle: 'none',
            margin: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '16px',
                  fontWeight: pathname === link.href ? 600 : 400,
                  color: pathname === link.href ? '#F0ECE4' : 'rgba(240,236,228,0.55)',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li style={{ paddingTop: '0.5rem' }}>
            <Link href="/iletisim" className="btn-lime" style={{ display: 'inline-block' }}>
              Projeyi Konuşalım
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
