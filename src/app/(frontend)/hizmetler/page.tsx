import Link from 'next/link'
import type { Metadata } from 'next'
import { portfolioProjects } from '@/data/portfolio'

export const metadata: Metadata = {
  title: 'Hizmetler — Klasik Ajans',
  description: 'Tasarım, video animasyon, içerik ve web sitesi. Dört alanda çözüm üretiyoruz.',
}

const services = [
  {
    num: '01',
    title: 'Tasarım',
    color: '#1A6B3C',
    bg: '#E6F4EC',
    tagline: 'Görünüş değil, iletişim.',
    body: 'Logonuz ne anlatıyor? Kurumsal kimliğiniz güven veriyor mu? Tasarımı iş yapan bir araca dönüştürürüz.',
    deliverables: ['Logo & marka kimliği', 'Kurumsal kimlik kılavuzu', 'Baskı materyalleri', 'Dijital görseller & sosyal medya'],
    relatedIds: ['pierre-fabre', 'anpa-gross', 'portx'],
  },
  {
    num: '02',
    title: 'Video & Animasyon',
    color: '#6B21A8',
    bg: '#F3E8FF',
    tagline: 'Göstermek, anlatmaktan hızlıdır.',
    body: 'Ürününüzü anlatmanın en hızlı yolu göstermektir. Masaüstü video ve animasyonlarla kompleks fikirleri sade ve çarpıcı hale getiririz.',
    deliverables: ['Masaüstü ürün animasyonları', 'Motion design', 'Kurumsal tanıtım videoları', 'Sosyal medya video içerikleri'],
    relatedIds: ['fonmap', 'lingozon', 'kenvue'],
  },
  {
    num: '03',
    title: 'İçerik',
    color: '#B91C1C',
    bg: '#FEE2E2',
    tagline: 'Ne söylediğiniz kadar nasıl söylediğiniz de önemli.',
    body: 'Markanızın sesini bulup tutarlı bir dille konuştururuz. Metin yazmaktan strateji kurmaya kadar.',
    deliverables: ['Marka sesi & ton of voice', 'Web sitesi metinleri', 'Sosyal medya içerikleri', 'İçerik stratejisi'],
    relatedIds: ['noom', 'fenertalk', 're-pie'],
  },
  {
    num: '04',
    title: 'Web Sitesi',
    color: '#1B3FC4',
    bg: '#E8EDFC',
    tagline: 'Hızlı yüklenen, mobilde çalışan, müşteri kazandıran.',
    body: 'Süs değil, sonuç. Kurumsal siteden e-ticarete, landing page\'den uygulamaya — işe yarayan web çözümleri üretiyoruz.',
    deliverables: ['Kurumsal web siteleri', 'Landing page', 'E-ticaret', 'Web uygulama arayüzleri'],
    relatedIds: ['portx', 'pierre-fabre'],
  },
]

export default function HizmetlerPage() {
  return (
    <>
      {/* Sayfa başlığı */}
      <section className="section-sm" style={{ backgroundColor: '#E8E3D4' }}>
        <div className="container">
          <h1 style={{ color: '#1A1A1A', marginBottom: '0.75rem' }}>Hizmetler</h1>
          <p style={{ color: '#5C5C52', fontSize: '1.05rem', maxWidth: '520px', margin: 0 }}>
            Dört alanda üretim yapıyoruz. Her biri için gerçek çözümler, gerçek sonuçlar.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* Servis kartları — büyük grid */}
      <section className="section" style={{ backgroundColor: '#F7F4EC' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {services.map((s) => (
              <div
                key={s.num}
                style={{
                  backgroundColor: '#FAFAF5',
                  border: '1px solid #D8D4C8',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                {/* Renkli üst alan */}
                <div
                  style={{
                    backgroundColor: s.color,
                    padding: '1.5rem 1.5rem 1.2rem',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.7)',
                      letterSpacing: '0.12em',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {s.num}
                  </div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                      color: '#FFFFFF',
                      marginBottom: '0.4rem',
                      lineHeight: 1.15,
                    }}
                  >
                    {s.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '12.5px',
                      color: 'rgba(255,255,255,0.75)',
                      fontStyle: 'italic',
                      margin: 0,
                    }}
                  >
                    {s.tagline}
                  </p>
                </div>

                {/* İçerik */}
                <div style={{ padding: '1.4rem 1.5rem 1.6rem' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '13.5px',
                      color: '#5C5C52',
                      lineHeight: 1.65,
                      marginBottom: '1.2rem',
                    }}
                  >
                    {s.body}
                  </p>

                  {/* Neler yapıyoruz */}
                  <div
                    style={{
                      paddingTop: '1rem',
                      borderTop: '1px solid #E8E3D8',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '10.5px',
                        fontWeight: 600,
                        color: s.color,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.6rem',
                      }}
                    >
                      Neler Üretiyoruz
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          style={{
                            fontFamily: 'var(--font-inter)',
                            fontSize: '13px',
                            color: '#1A1A1A',
                            padding: '4px 0',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                          }}
                        >
                          <span
                            style={{
                              width: '5px',
                              height: '5px',
                              borderRadius: '50%',
                              backgroundColor: s.color,
                              flexShrink: 0,
                            }}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* İlgili referanslar */}
                  {s.relatedIds.length > 0 && (
                    <div style={{ marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px solid #E8E3D8' }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '10.5px',
                          fontWeight: 600,
                          color: '#5C5C52',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          marginBottom: '0.5rem',
                        }}
                      >
                        Bu Alanda Çalıştığımız Markalar
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {s.relatedIds.map((id) => {
                          const proj = portfolioProjects.find((p) => p.id === id)
                          if (!proj) return null
                          return (
                            <span
                              key={id}
                              style={{
                                padding: '3px 9px',
                                backgroundColor: s.bg,
                                color: s.color,
                                borderRadius: '999px',
                                fontFamily: 'var(--font-inter)',
                                fontSize: '11px',
                                fontWeight: 600,
                              }}
                            >
                              {proj.name}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: '#1A1A1A', paddingTop: '4.5rem', paddingBottom: '4.5rem' }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            <div>
              <h2 style={{ color: '#F7F4EC', margin: 0 }}>
                Hangi hizmet ilginizi çekti?
              </h2>
              <p style={{ color: 'rgba(247,244,236,0.6)', marginTop: '0.5rem', margin: 0 }}>
                Projenizi anlatın, size en uygun çözümü konuşalım.
              </p>
            </div>
            <Link
              href="/iletisim"
              style={{
                display: 'inline-block',
                padding: '0.8rem 2rem',
                backgroundColor: '#F7F4EC',
                color: '#1A1A1A',
                borderRadius: '4px',
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '0.875rem',
                letterSpacing: '0.04em',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
