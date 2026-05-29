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
      <section className="bg-[#111111] py-10 md:py-16">
        <div className="container">
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#B3FF6B',
              marginBottom: '0.75rem',
            }}
          >
            İletişim
          </p>
          <h1 style={{ color: '#F0ECE4', marginBottom: '0.75rem' }}>
            İletişime Geçin
          </h1>
          <p style={{ color: 'rgba(240,236,228,0.5)', fontSize: '1.05rem', maxWidth: '420px', margin: 0 }}>
            Projenizi anlatın. Genellikle 24 saat içinde dönüş yaparız.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* Form + Bilgiler */}
      <section className="bg-[#0D0D0D] py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

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
                      borderBottom: i < contactInfo.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '10.5px',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(240,236,228,0.35)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover-lime"
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '15px',
                          fontWeight: 500,
                          color: '#F0ECE4',
                          textDecoration: 'none',
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
                          color: '#F0ECE4',
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
                  backgroundColor: 'rgba(179,255,107,0.06)',
                  border: '1px solid rgba(179,255,107,0.2)',
                  borderRadius: '10px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#F0ECE4',
                    marginBottom: '0.5rem',
                    lineHeight: 1.35,
                  }}
                >
                  Az laf, çok iş<span style={{ color: '#B3FF6B' }}>.</span>
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    color: 'rgba(240,236,228,0.5)',
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
