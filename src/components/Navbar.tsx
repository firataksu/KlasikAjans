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
        <nav className="flex items-center justify-between h-[68px]">
          <Link href="/" aria-label="Klasik Ajans Ana Sayfa" className="flex items-center">
            <LogoKlasik size="md" variant="light" />
          </Link>

          {/* Desktop menü */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
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
            className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-[22px] h-[1.5px] bg-[#F0ECE4] rounded-[1px] transition-all duration-200"
                style={{

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
        className={`bg-[#0D0D0D] border-t border-white/5 overflow-hidden transition-[max-height] duration-300 ease-in-out ${menuOpen ? 'max-h-[360px]' : 'max-h-0'}`}
      >
        <ul
          className="container flex flex-col pt-6 pb-8 gap-5 list-none m-0"
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
