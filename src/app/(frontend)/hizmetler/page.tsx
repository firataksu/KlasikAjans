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
    color: '#4ADE80',
    bg: 'rgba(74,222,128,0.08)',
    border: 'rgba(74,222,128,0.2)',
    tagline: 'Görünüş değil, iletişim.',
    body: 'Logonuz ne anlatıyor? Kurumsal kimliğiniz güven veriyor mu? Tasarımı iş yapan bir araca dönüştürürüz.',
    deliverables: ['Logo & marka kimliği', 'Kurumsal kimlik kılavuzu', 'Baskı materyalleri', 'Dijital görseller & sosyal medya'],
    relatedIds: ['pierre-fabre', 'anpa-gross', 'portx'],
  },
  {
    num: '02',
    title: 'Video & Animasyon',
    color: '#A78BFA',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.2)',
    tagline: 'Göstermek, anlatmaktan hızlıdır.',
    body: 'Ürününüzü anlatmanın en hızlı yolu göstermektir. Masaüstü video ve animasyonlarla kompleks fikirleri sade ve çarpıcı hale getiririz.',
    deliverables: ['Masaüstü ürün animasyonları', 'Motion design', 'Kurumsal tanıtım videoları', 'Sosyal medya video içerikleri'],
    relatedIds: ['fonmap', 'lingozon', 'kenvue'],
  },
  {
    num: '03',
    title: 'İçerik',
    color: '#F87171',
    bg: 'rgba(248,113,113,0.08)',
    border: 'rgba(248,113,113,0.2)',
    tagline: 'Ne söylediğiniz kadar nasıl söylediğiniz de önemli.',
    body: 'Markanızın sesini bulup tutarlı bir dille konuştururuz. Metin yazmaktan strateji kurmaya kadar.',
    deliverables: ['Marka sesi & ton of voice', 'Web sitesi metinleri', 'Sosyal medya içerikleri', 'İçerik stratejisi'],
    relatedIds: ['noom', 'fenertalk', 're-pie'],
  },
  {
    num: '04',
    title: 'Web Sitesi',
    color: '#60A5FA',
    bg: 'rgba(96,165,250,0.08)',
    border: 'rgba(96,165,250,0.2)',
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
            Ne yapıyoruz
          </p>
          <h1 style={{ color: '#F0ECE4', marginBottom: '0.75rem' }}>Hizmetler</h1>
          <p style={{ color: 'rgba(240,236,228,0.5)', fontSize: '1.05rem', maxWidth: '520px', margin: 0 }}>
            Dört alanda üretim yapıyoruz. Her biri için gerçek çözümler, gerçek sonuçlar.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* Servis kartları */}
      <section className="bg-[#0D0D0D] py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {services.map((s) => (
              <div
                key={s.num}
                style={{
                  backgroundColor: '#171717',
                  border: `1px solid ${s.border}`,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'transform 250ms ease, box-shadow 250ms ease',
                }}
              >
                {/* Renkli üst alan */}
                <div
                  style={{
                    backgroundColor: s.bg,
                    borderBottom: `1px solid ${s.border}`,
                    padding: '1.5rem 1.5rem 1.2rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: s.color,
                      letterSpacing: '0.12em',
                      opacity: 0.7,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {s.num}
                  </div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                      color: s.color,
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
                      color: 'rgba(240,236,228,0.5)',
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
                      color: 'rgba(240,236,228,0.55)',
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
                      borderTop: '1px solid rgba(255,255,255,0.07)',
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
                        opacity: 0.85,
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
                            color: 'rgba(240,236,228,0.7)',
                            padding: '4px 0',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                          }}
                        >
                          <span
                            style={{
                              width: '4px',
                              height: '4px',
                              borderRadius: '50%',
                              backgroundColor: s.color,
                              flexShrink: 0,
                              opacity: 0.7,
                            }}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* İlgili referanslar */}
                  {s.relatedIds.length > 0 && (
                    <div style={{ marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '10.5px',
                          fontWeight: 600,
                          color: 'rgba(240,236,228,0.4)',
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
                                border: `1px solid ${s.border}`,
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
      <section className="bg-[#060606] py-16 border-t border-white/5">
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
              <h2 style={{ color: '#F0ECE4', margin: 0 }}>
                Hangi hizmet ilginizi çekti?
              </h2>
              <p style={{ color: 'rgba(240,236,228,0.45)', marginTop: '0.5rem', margin: 0 }}>
                Projenizi anlatın, size en uygun çözümü konuşalım.
              </p>
            </div>
            <Link href="/iletisim" className="btn-lime" style={{ whiteSpace: 'nowrap' }}>
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
