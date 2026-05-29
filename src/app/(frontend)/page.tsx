import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { portfolioProjects } from '@/data/portfolio'

export const metadata: Metadata = {
  title: 'Klasik Ajans — Az laf, çok iş.',
  description:
    'Tasarım, video animasyon, içerik ve web işleri. Sade anlatır, düzgün üretir, zamanında teslim ederiz.',
}

const featuredProjects = portfolioProjects.filter((p) => p.featured).slice(0, 6)

const services = [
  {
    num: '01',
    title: 'Tasarım',
    desc: 'Logo, kurumsal kimlik, baskı ve dijital görseller.',
    color: '#4ADE80',
    border: 'rgba(74,222,128,0.25)',
    glow: 'rgba(74,222,128,0.08)',
  },
  {
    num: '02',
    title: 'Video & Animasyon',
    desc: 'Masaüstü video prodüksiyonu, motion design, ürün animasyonları.',
    color: '#A78BFA',
    border: 'rgba(167,139,250,0.25)',
    glow: 'rgba(167,139,250,0.08)',
  },
  {
    num: '03',
    title: 'İçerik',
    desc: 'Metin, sosyal medya içeriği, strateji ve marka sesi.',
    color: '#F87171',
    border: 'rgba(248,113,113,0.25)',
    glow: 'rgba(248,113,113,0.08)',
  },
  {
    num: '04',
    title: 'Web Sitesi',
    desc: 'Kurumsal siteler, landing page, e-ticaret çözümleri.',
    color: '#60A5FA',
    border: 'rgba(96,165,250,0.25)',
    glow: 'rgba(96,165,250,0.08)',
  },
]

const brandNames = [
  'Pierre Fabre', 'PortX', 'Fonmap', 'Re-Pie', 'Lingozon',
  'FenerTalk', 'Kenvue', 'Anpa Gross', 'Noom',
  'Cloverr', 'Repzone', 'Byngo', 'Blotto', 'OrionFinX',
]

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#0D0D0D', paddingTop: '6rem', paddingBottom: '5.5rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Sol: Metin */}
            <div>
              {/* Rozet */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '2.25rem',
                  padding: '5px 14px 5px 10px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '999px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#B3FF6B',
                    flexShrink: 0,
                    boxShadow: '0 0 0 3px rgba(179,255,107,0.25)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '11.5px',
                    fontWeight: 500,
                    color: 'rgba(240,236,228,0.6)',
                    letterSpacing: '0.05em',
                  }}
                >
                  Klasik Ajans · İstanbul
                </span>
              </div>

              <h1 style={{ color: '#F0ECE4', marginBottom: '1.5rem' }}>
                Az laf,{' '}
                <em style={{ fontStyle: 'italic' }}>
                  çok iş<span style={{ color: '#B3FF6B' }}>.</span>
                </em>
              </h1>

              <p
                style={{
                  color: 'rgba(240,236,228,0.6)',
                  fontSize: '1.1rem',
                  lineHeight: 1.75,
                  maxWidth: '460px',
                  marginBottom: '2.5rem',
                }}
              >
                Tasarım, video animasyon, içerik ve web işleri. Sade anlatır, düzgün üretir, zamanında teslim ederiz.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <Link href="/referanslar" className="btn-primary">
                  İşlere Bak
                </Link>
                <Link href="/iletisim" className="btn-outline">
                  Projeyi Konuşalım
                </Link>
              </div>
            </div>

            {/* Sağ: Kolaj */}
            <div
              style={{
                position: 'relative',
                height: '380px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Kart 1 — arka sol */}
              <div
                style={{
                  position: 'absolute',
                  width: '185px',
                  height: '248px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transform: 'rotate(-8deg) translate(-72px, 28px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  zIndex: 0,
                }}
              >
                <Image
                  src="/portfolio/thumbs/fonmap.jpg"
                  alt="Fonmap"
                  fill
                  unoptimized
                  sizes="185px"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
              </div>

              {/* Kart 2 — arka sağ */}
              <div
                style={{
                  position: 'absolute',
                  width: '178px',
                  height: '238px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transform: 'rotate(7deg) translate(76px, -18px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.45)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  zIndex: 0,
                }}
              >
                <Image
                  src="/portfolio/thumbs/cloverr.jpg"
                  alt="Cloverr"
                  fill
                  unoptimized
                  sizes="178px"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
              </div>

              {/* Kart 3 — ön merkez */}
              <div
                style={{
                  position: 'absolute',
                  width: '200px',
                  height: '268px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transform: 'rotate(-1.5deg) translate(4px, -8px)',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.1)',
                  zIndex: 2,
                }}
              >
                <Image
                  src="/portfolio/thumbs/pierre-fabre.jpg"
                  alt="Pierre Fabre"
                  fill
                  unoptimized
                  sizes="200px"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)' }} />
                {/* Lime badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '14px',
                    padding: '3px 10px',
                    backgroundColor: '#B3FF6B',
                    borderRadius: '999px',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#0A0A0A',
                    letterSpacing: '0.05em',
                  }}
                >
                  14+ Proje
                </div>
              </div>

              {/* Arka ışıma */}
              <div
                style={{
                  position: 'absolute',
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(179,255,107,0.06) 0%, transparent 70%)',
                  zIndex: -1,
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MARKA ŞERİDİ (MARQUEE)
      ══════════════════════════════════════════ */}
      <div
        style={{
          backgroundColor: '#060606',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
          overflow: 'hidden',
          paddingTop: '14px',
          paddingBottom: '14px',
        }}
      >
        <div className="marquee-track">
          {[...brandNames, ...brandNames].map((name, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '28px',
                paddingRight: '28px',
                fontFamily: 'var(--font-inter)',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(240,236,228,0.3)',
                whiteSpace: 'nowrap',
              }}
            >
              {name}
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '3px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(179,255,107,0.4)',
                  flexShrink: 0,
                }}
              />
            </span>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* ══════════════════════════════════════════
          HİZMETLER
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '2.5rem',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#B3FF6B',
                  marginBottom: '0.5rem',
                }}
              >
                Hizmetler
              </p>
              <h2 style={{ color: '#F0ECE4', margin: 0 }}>Ne Yapıyoruz</h2>
            </div>
            <Link href="/hizmetler" className="section-link">
              Tüm Hizmetler
              <span style={{ fontSize: '16px', lineHeight: 1 }}>→</span>
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '12px',
            }}
          >
            {services.map((s) => (
              <div
                key={s.num}
                className="home-service-card"
                style={{ border: `1px solid ${s.border}` }}
              >
                <div style={{ height: '4px', backgroundColor: s.color, opacity: 0.8 }} />
                <div style={{ padding: '1.5rem 1.5rem 1.6rem' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      backgroundColor: `${s.glow}`,
                      border: `1px solid ${s.border}`,
                      marginBottom: '1rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '10px',
                        fontWeight: 700,
                        color: s.color,
                        letterSpacing: '0.05em',
                      }}
                    >
                      {s.num}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1.2rem',
                      color: '#F0ECE4',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '13.5px',
                      color: 'rgba(240,236,228,0.55)',
                      lineHeight: 1.6,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════
          SEÇİLİ ÇALIŞMALAR
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: '#111111' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '2.5rem',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#B3FF6B',
                  marginBottom: '0.5rem',
                }}
              >
                Referanslar
              </p>
              <h2 style={{ color: '#F0ECE4', margin: 0 }}>Seçili Çalışmalar</h2>
            </div>
            <Link href="/referanslar" className="section-link">
              Tüm Çalışmalar
              <span style={{ fontSize: '16px', lineHeight: 1 }}>→</span>
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '16px',
            }}
          >
            {featuredProjects.map((project) => (
              <div key={project.id} className="portfolio-card">
                <div
                  style={{
                    height: '148px',
                    backgroundColor: project.color,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 320 148"
                    fill="none"
                    style={{ position: 'absolute', inset: 0 }}
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <rect x="20" y="20" width="130" height="90" rx="6" fill="rgba(255,255,255,0.09)" />
                    <rect x="24" y="24" width="122" height="10" rx="3" fill="rgba(255,255,255,0.18)" />
                    <rect x="24" y="38" width="80" height="5" rx="2" fill="rgba(255,255,255,0.12)" />
                    <rect x="24" y="46" width="60" height="5" rx="2" fill="rgba(255,255,255,0.08)" />
                    <rect x="24" y="58" width="110" height="42" rx="4" fill="rgba(255,255,255,0.10)" />
                    <rect x="24" y="64" width="55" height="8" rx="2" fill="rgba(255,255,255,0.14)" />
                    <rect x="24" y="76" width="38" height="5" rx="2" fill="rgba(255,255,255,0.09)" />
                    <circle cx="248" cy="44" r="36" fill="rgba(255,255,255,0.06)" />
                    <circle cx="248" cy="44" r="20" fill="rgba(255,255,255,0.08)" />
                    <circle cx="248" cy="44" r="9" fill="rgba(255,255,255,0.11)" />
                    <rect x="180" y="82" width="110" height="44" rx="6" fill="rgba(255,255,255,0.09)" />
                    <rect x="186" y="88" width="60" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
                    <rect x="186" y="98" width="44" height="4" rx="2" fill="rgba(255,255,255,0.10)" />
                    <rect x="186" y="106" width="52" height="4" rx="2" fill="rgba(255,255,255,0.07)" />
                    <rect x="186" y="114" width="32" height="7" rx="3" fill="rgba(255,255,255,0.12)" />
                  </svg>
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      padding: '3px 10px',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      borderRadius: '999px',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '10.5px',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.9)',
                      letterSpacing: '0.05em',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {project.country}
                  </div>
                </div>

                <div style={{ padding: '1.2rem 1.4rem 1.4rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#F0ECE4',
                      marginBottom: '6px',
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '13px',
                      color: 'rgba(240,236,228,0.5)',
                      lineHeight: 1.6,
                      marginBottom: '12px',
                    }}
                  >
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {project.services.map((svc) => (
                      <span
                        key={svc}
                        style={{
                          display: 'inline-block',
                          padding: '2px 9px',
                          backgroundColor: 'rgba(255,255,255,0.06)',
                          color: 'rgba(240,236,228,0.65)',
                          borderRadius: '999px',
                          fontFamily: 'var(--font-inter)',
                          fontSize: '10px',
                          fontWeight: 600,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════
          AJANS KİMLİĞİ
      ══════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            <div>
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
                Biz kimiz
              </p>
              <h2 style={{ color: '#F0ECE4', marginBottom: '1.5rem', maxWidth: '340px' }}>
                Klasik Ajans nedir?
              </h2>
              <p
                style={{
                  color: 'rgba(240,236,228,0.6)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  maxWidth: '440px',
                }}
              >
                İşi büyütmeden çözen sade bir reklam ajansı. Gereksiz toplantılar, uzun sunumlar ve karmaşık süreçler yerine; net iletişim, hızlı üretim ve düzgün teslimatla çalışır.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/hakkimizda" className="btn-outline">
                  Daha Fazla
                </Link>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { n: '01', title: 'Az toplantı.', body: 'İş tarifini anlıyoruz, üretime geçiyoruz.' },
                { n: '02', title: 'Net iletişim.', body: 'Ne yapacağımızı, ne zaman teslim edeceğimizi söyleriz.' },
                { n: '03', title: 'Zamanında teslim.', body: 'Bu bir taahhüt. Tarih söylediysek, o tarihte teslim ederiz.' },
              ].map((item, i) => (
                <div
                  key={item.n}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start',
                    padding: '1.5rem 0',
                    borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  }}
                >
                  <div className="step-number" style={{ marginTop: '2px' }}>{item.n}</div>
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '15px',
                        fontWeight: 600,
                        color: '#F0ECE4',
                        marginBottom: '4px',
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '13.5px',
                        color: 'rgba(240,236,228,0.55)',
                        lineHeight: 1.6,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ALT CTA
      ══════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: '#060606',
          paddingTop: '5.5rem',
          paddingBottom: '5.5rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B3FF6B',
              marginBottom: '1.25rem',
            }}
          >
            Başlayalım
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              color: '#F0ECE4',
              marginBottom: '1rem',
              maxWidth: '560px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Bir projeniz mi var?
          </h2>
          <p
            style={{
              color: 'rgba(240,236,228,0.45)',
              fontSize: '1rem',
              marginBottom: '2.5rem',
              maxWidth: '400px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.65,
            }}
          >
            Hızlı bir mesajla başlayalım. Genellikle 24 saat içinde dönüş yaparız.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/iletisim" className="btn-lime">
              Projeyi Konuşalım
            </Link>
            <a
              href="mailto:info@klasikajans.com"
              className="btn-outline"
            >
              info@klasikajans.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
