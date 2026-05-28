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
      <section style={{ backgroundColor: '#0D0D0D', paddingTop: '6rem', paddingBottom: '5rem' }}>
        <div className="container">
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

          {/* Başlık */}
          <h1
            style={{
              color: '#F0ECE4',
              marginBottom: '1.5rem',
              maxWidth: '760px',
            }}
          >
            Az laf,{' '}
            <em style={{ fontStyle: 'italic' }}>
              çok iş<span style={{ color: '#B3FF6B' }}>.</span>
            </em>
          </h1>

          <p
            style={{
              color: 'rgba(240,236,228,0.6)',
              fontSize: '1.15rem',
              lineHeight: 1.75,
              maxWidth: '520px',
              marginBottom: '2.5rem',
            }}
          >
            Tasarım, video animasyon, içerik ve web işleri. Sade anlatır, düzgün üretir, zamanında teslim ederiz.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '4rem' }}>
            <Link href="/referanslar" className="btn-primary">
              İşlere Bak
            </Link>
            <Link href="/iletisim" className="btn-outline">
              Projeyi Konuşalım
            </Link>
          </div>

          {/* Portfolio thumbnail şeridi */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '8px',
              overflow: 'hidden',
              borderRadius: '12px',
            }}
          >
            {portfolioProjects.slice(0, 7).map((project) => (
              <div
                key={project.id}
                style={{
                  position: 'relative',
                  aspectRatio: '3 / 4',
                  backgroundColor: project.color,
                  overflow: 'hidden',
                  borderRadius: '8px',
                }}
              >
                <Image
                  src={`/portfolio/thumbs/${project.id}.jpg`}
                  alt={project.name}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 25vw, 14vw"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div className="thumb-overlay" />
              </div>
            ))}
          </div>

          {/* İstatistikler */}
          <div
            style={{
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              display: 'flex',
              gap: '3rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { val: '14+', label: 'Proje' },
              { val: '4', label: 'Hizmet Alanı' },
              { val: '100%', label: 'Zamanında Teslim' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#F0ECE4',
                    lineHeight: 1,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {stat.val}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '10.5px',
                    color: 'rgba(240,236,228,0.45)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginTop: '5px',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
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
