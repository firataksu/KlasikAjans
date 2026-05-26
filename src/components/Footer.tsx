'use client'

import Link from 'next/link'
import LogoKlasik from './LogoKlasik'

const navLinks = [
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/referanslar', label: 'Referanslar' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
]

const services = [
  'Tasarım',
  'Video & Animasyon',
  'İçerik',
  'Web Sitesi',
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1A1A', color: '#F7F4EC' }}>
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Marka */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link href="/" aria-label="Klasik Ajans">
              <LogoKlasik variant="light" size="md" />
            </Link>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '13.5px',
                color: 'rgba(247,244,236,0.55)',
                lineHeight: 1.7,
                marginTop: '1rem',
                maxWidth: '240px',
              }}
            >
              İşi büyütmeden çözen sade bir reklam ajansı. İstanbul.
            </p>
            <a
              href="mailto:info@klasikajans.com"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                fontWeight: 500,
                color: 'rgba(247,244,236,0.75)',
                textDecoration: 'none',
                marginTop: '1rem',
                transition: 'color 150ms ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#F7F4EC' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(247,244,236,0.75)' }}
            >
              info@klasikajans.com
            </a>
          </div>

          {/* Navigasyon */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(247,244,236,0.4)',
                marginBottom: '1rem',
              }}
            >
              Sayfalar
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '13.5px',
                      color: 'rgba(247,244,236,0.65)',
                      textDecoration: 'none',
                      transition: 'color 150ms ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#F7F4EC' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(247,244,236,0.65)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(247,244,236,0.4)',
                marginBottom: '1rem',
              }}
            >
              Hizmetler
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/hizmetler"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '13.5px',
                      color: 'rgba(247,244,236,0.65)',
                      textDecoration: 'none',
                      transition: 'color 150ms ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#F7F4EC' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(247,244,236,0.65)' }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: '3rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(247,244,236,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '12px',
              color: 'rgba(247,244,236,0.35)',
            }}
          >
            © {new Date().getFullYear()} Klasik Ajans. Tüm hakları saklıdır.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              color: 'rgba(247,244,236,0.25)',
              letterSpacing: '0.04em',
            }}
          >
            İstanbul
          </p>
        </div>
      </div>
    </footer>
  )
}
