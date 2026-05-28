import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { portfolioProjects } from '@/data/portfolio'

export const metadata: Metadata = {
  title: 'Referanslar — Klasik Ajans',
  description: 'Pierre Fabre, PortX, Fonmap, Lingozon ve daha fazlası. Klasik Ajans tarafından üretilmiş seçili çalışmalar.',
}

export default function ReferanslarPage() {
  return (
    <>
      {/* Başlık */}
      <section className="section-sm" style={{ backgroundColor: '#111111' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1.5rem',
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
                Portfolyo
              </p>
              <h1 style={{ color: '#F0ECE4', marginBottom: '0.5rem' }}>Referanslar</h1>
              <p style={{ color: 'rgba(240,236,228,0.5)', fontSize: '1rem', margin: 0 }}>
                {portfolioProjects.length} proje · 4 hizmet alanı
              </p>
            </div>
            <Link href="/iletisim" className="btn-lime" style={{ alignSelf: 'center', whiteSpace: 'nowrap' }}>
              Projeyi Konuşalım
            </Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Grid */}
      <section className="section" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '20px',
            }}
          >
            {portfolioProjects.map((project) => (
              <article key={project.id} className="portfolio-card">
                {/* Screenshot */}
                <div
                  style={{
                    height: '200px',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: project.color,
                  }}
                >
                  <Image
                    src={`/portfolio/thumbs/${project.id}.jpg`}
                    alt={`${project.name} proje ekran görüntüsü`}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />

                  {/* Ülke rozeti */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      padding: '3px 10px',
                      backgroundColor: 'rgba(0,0,0,0.55)',
                      borderRadius: '999px',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '10.5px',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.9)',
                      letterSpacing: '0.04em',
                      backdropFilter: 'blur(6px)',
                      zIndex: 1,
                    }}
                  >
                    {project.country}
                  </div>
                </div>

                {/* İçerik */}
                <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                  <h2
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#F0ECE4',
                      marginBottom: '8px',
                    }}
                  >
                    {project.name}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '13px',
                      color: 'rgba(240,236,228,0.5)',
                      lineHeight: 1.65,
                      marginBottom: '14px',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tag pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {(project.tags ?? project.services).slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          display: 'inline-block',
                          padding: '3px 10px',
                          backgroundColor: 'rgba(179,255,107,0.08)',
                          color: '#B3FF6B',
                          borderRadius: '999px',
                          fontFamily: 'var(--font-inter)',
                          fontSize: '10.5px',
                          fontWeight: 600,
                          letterSpacing: '0.03em',
                          border: '1px solid rgba(179,255,107,0.2)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: '#060606',
          paddingTop: '4rem',
          paddingBottom: '4rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#F0ECE4', marginBottom: '0.75rem' }}>
            Sıradaki çalışma sizinki olsun.
          </h2>
          <p style={{ color: 'rgba(240,236,228,0.45)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Projenizi anlatın, nasıl çözebileceğimizi konuşalım.
          </p>
          <Link href="/iletisim" className="btn-lime">
            İletişime Geçin
          </Link>
        </div>
      </section>
    </>
  )
}
