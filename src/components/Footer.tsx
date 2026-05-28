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
    <footer style={{ backgroundColor: '#080808', color: '#F0ECE4', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
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
                color: 'rgba(240,236,228,0.4)',
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
                color: 'rgba(240,236,228,0.55)',
                textDecoration: 'none',
                marginTop: '1rem',
                transition: 'color 150ms ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#B3FF6B' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,236,228,0.55)' }}
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
                color: 'rgba(240,236,228,0.25)',
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
                      color: 'rgba(240,236,228,0.45)',
                      textDecoration: 'none',
                      transition: 'color 150ms ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#F0ECE4' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,236,228,0.45)' }}
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
                color: 'rgba(240,236,228,0.25)',
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
                      color: 'rgba(240,236,228,0.45)',
                      textDecoration: 'none',
                      transition: 'color 150ms ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#F0ECE4' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,236,228,0.45)' }}
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
            borderTop: '1px solid rgba(255,255,255,0.06)',
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
              color: 'rgba(240,236,228,0.2)',
            }}
          >
            © {new Date().getFullYear()} Klasik Ajans. Tüm hakları saklıdır.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              color: 'rgba(240,236,228,0.15)',
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
