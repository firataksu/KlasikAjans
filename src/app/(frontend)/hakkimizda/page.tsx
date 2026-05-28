import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda — Klasik Ajans',
  description: 'Klasik Ajans, işi büyütmeden çözen sade bir reklam ajansı.',
}

const principles = [
  {
    num: '01',
    title: 'Az toplantı.',
    body: 'İş tarifini anlıyoruz, üretime geçiyoruz. Uzun brief süreçleri ve sunum döngüleri yerine net bir başlangıç, hızlı bir üretim.',
    color: '#4ADE80',
    border: 'rgba(74,222,128,0.2)',
  },
  {
    num: '02',
    title: 'Net iletişim.',
    body: 'Ne yapacağımızı, ne zaman teslim edeceğimizi söyleriz. Sizi tahmin yürütmek zorunda bırakmayız.',
    color: '#60A5FA',
    border: 'rgba(96,165,250,0.2)',
  },
  {
    num: '03',
    title: 'Zamanında teslim.',
    body: 'Bu bir taahhüt. Tarih söylediysek, o tarihte teslim ederiz.',
    color: '#A78BFA',
    border: 'rgba(167,139,250,0.2)',
  },
  {
    num: '04',
    title: 'Süs değil, sonuç.',
    body: 'Her iş bir problemi çözer. Güzel görünmek değil, işe yaramak birincil kriterimiz.',
    color: '#F87171',
    border: 'rgba(248,113,113,0.2)',
  },
]

export default function HakkimizdaPage() {
  return (
    <>
      {/* Sayfa başlığı */}
      <section className="section-sm" style={{ backgroundColor: '#111111' }}>
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
            Biz kimiz
          </p>
          <h1 style={{ color: '#F0ECE4' }}>Hakkımızda</h1>
        </div>
      </section>

      <div className="divider" />

      {/* Ana metin */}
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
              <h2 style={{ color: '#F0ECE4', marginBottom: '1.5rem', maxWidth: '340px' }}>
                İşi büyütmeden çözen bir ajans.
              </h2>
              <div style={{ color: 'rgba(240,236,228,0.6)', fontSize: '1rem', lineHeight: 1.8 }}>
                <p>
                  Klasik Ajans, işi büyütmeden çözen sade bir reklam ajansı. Gereksiz toplantılar, uzun sunumlar ve karmaşık süreçler yerine; net iletişim, hızlı üretim ve düzgün teslimatla çalışır.
                </p>
                <p style={{ marginTop: '1.25rem' }}>
                  Tasarım, masaüstü video animasyonları, içerik ve web alanlarında üretim yapıyoruz. Büyük ajansların yarattığı şişkin süreçler olmadan, doğrudan işe odaklanıyoruz.
                </p>
                <p style={{ marginTop: '1.25rem' }}>
                  Eski usul esnaf dürüstlüğünü modern dijital dünyayla birleştiriyoruz.
                </p>
              </div>
            </div>

            {/* Slogan kutusu */}
            <div
              style={{
                backgroundColor: '#111111',
                border: '1px solid rgba(179,255,107,0.15)',
                borderRadius: '12px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#B3FF6B',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  opacity: 0.8,
                }}
              >
                Klasik Ajans
              </p>
              <div
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  color: '#F0ECE4',
                  lineHeight: 1.2,
                  letterSpacing: '0.02em',
                }}
              >
                Az laf,
                <br />
                <em>çok iş<span style={{ color: '#B3FF6B' }}>.</span></em>
              </div>
              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {[
                  { label: 'Kuruluş', val: 'İstanbul' },
                  { label: 'Hizmet', val: '4 alan' },
                  { label: 'Markalar', val: '14+' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '12px',
                        color: 'rgba(240,236,228,0.35)',
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: 'rgba(240,236,228,0.75)',
                      }}
                    >
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Prensipler */}
      <section className="section" style={{ backgroundColor: '#111111' }}>
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
            Yaklaşımımız
          </p>
          <h2 style={{ color: '#F0ECE4', marginBottom: '2.5rem' }}>Nasıl Çalışıyoruz</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
            }}
          >
            {principles.map((p) => (
              <div
                key={p.num}
                style={{
                  backgroundColor: '#171717',
                  border: `1px solid ${p.border}`,
                  borderRadius: '10px',
                  padding: '1.5rem',
                  borderTop: `3px solid ${p.color}`,
                  transition: 'transform 220ms ease',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '10.5px',
                    fontWeight: 600,
                    color: p.color,
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem',
                    opacity: 0.75,
                  }}
                >
                  {p.num}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.2rem',
                    color: '#F0ECE4',
                    marginBottom: '0.6rem',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    color: 'rgba(240,236,228,0.55)',
                    lineHeight: 1.65,
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="divider" />
      <section className="section-sm" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                  color: '#F0ECE4',
                  margin: 0,
                }}
              >
                Bir projeniz mi var?
              </h3>
              <p style={{ color: 'rgba(240,236,228,0.45)', fontSize: '14px', marginTop: '6px' }}>
                info@klasikajans.com
              </p>
            </div>
            <Link href="/iletisim" className="btn-lime">
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
