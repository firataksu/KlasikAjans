import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'İletişim — Klasik Ajans',
  description: 'Projenizi anlatın. En kısa sürede dönüş yapalım.',
}

const contactInfo = [
  {
    label: 'E-posta',
    value: 'info@klasikajans.com',
    href: 'mailto:info@klasikajans.com',
  },
  {
    label: 'Çalışma Saatleri',
    value: 'Pzt–Cum · 09:00–18:00',
    href: null,
  },
  {
    label: 'Konum',
    value: 'İstanbul, Türkiye',
    href: null,
  },
]

export default function IletisimPage() {
  return (
    <>
      {/* Başlık */}
      <section className="section-sm" style={{ backgroundColor: '#E8E3D4' }}>
        <div className="container">
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#5C5C52',
              marginBottom: '0.75rem',
            }}
          >
            İletişim
          </p>
          <h1 style={{ color: '#1A1A1A', marginBottom: '0.75rem' }}>
            İletişime Geçin
          </h1>
          <p style={{ color: '#5C5C52', fontSize: '1.05rem', maxWidth: '420px', margin: 0 }}>
            Projenizi anlatın. Genellikle 24 saat içinde dönüş yaparız.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* Form + Bilgiler */}
      <section className="section" style={{ backgroundColor: '#F7F4EC' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '5rem',
              alignItems: 'start',
            }}
          >
            {/* Form */}
            <div>
              <ContactForm />
            </div>

            {/* Bilgiler */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {contactInfo.map((item, i) => (
                  <div
                    key={item.label}
                    style={{
                      padding: '1.4rem 0',
                      borderBottom: i < contactInfo.length - 1 ? '1px solid #D8D4C8' : 'none',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '10.5px',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#5C5C52',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '15px',
                          fontWeight: 500,
                          color: '#1A1A1A',
                          textDecoration: 'none',
                          transition: 'color 150ms ease',
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '15px',
                          fontWeight: 500,
                          color: '#1A1A1A',
                          margin: 0,
                        }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Vurgu kutusu */}
              <div
                style={{
                  marginTop: '2.5rem',
                  padding: '1.5rem',
                  backgroundColor: '#1A1A1A',
                  borderRadius: '10px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#F7F4EC',
                    marginBottom: '0.5rem',
                    lineHeight: 1.35,
                  }}
                >
                  Az laf, çok iş.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    color: 'rgba(247,244,236,0.6)',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  Net iletişim kurarız, ne yapacağımızı söyleriz, zamanında teslim ederiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
