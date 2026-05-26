import { heroCards } from '@/data/portfolio'

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r}, ${g}, ${b}`
}

export default function HeroVisual() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
      }}
    >
      {heroCards.map((project, i) => (
        <div
          key={project.id}
          style={{
            backgroundColor: '#FAFAF5',
            border: '1px solid #D8D4C8',
            borderRadius: '10px',
            overflow: 'hidden',
            opacity: 1,
            transform: i % 2 === 1 ? 'translateY(14px)' : 'translateY(0)',
          }}
        >
          {/* Renkli görsel alan */}
          <div
            style={{
              backgroundColor: project.color,
              height: '96px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Soyut arkaplan deseni */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 160 96"
              fill="none"
              style={{ position: 'absolute', inset: 0 }}
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Mock ekran çerçevesi */}
              <rect
                x="12"
                y="14"
                width="84"
                height="58"
                rx="4"
                fill={`rgba(255,255,255,0.10)`}
              />
              <rect
                x="16"
                y="18"
                width="76"
                height="7"
                rx="2"
                fill={`rgba(255,255,255,0.20)`}
              />
              <rect
                x="16"
                y="29"
                width="50"
                height="4"
                rx="2"
                fill={`rgba(255,255,255,0.15)`}
              />
              <rect
                x="16"
                y="36"
                width="36"
                height="4"
                rx="2"
                fill={`rgba(255,255,255,0.10)`}
              />
              <rect
                x="16"
                y="46"
                width="60"
                height="18"
                rx="3"
                fill={`rgba(255,255,255,0.12)`}
              />
              {/* Sağ dekoratif daire */}
              <circle
                cx="130"
                cy="28"
                r="22"
                fill={`rgba(255,255,255,0.08)`}
              />
              <circle
                cx="130"
                cy="28"
                r="12"
                fill={`rgba(255,255,255,0.10)`}
              />
              {/* Sağ alt kart */}
              <rect
                x="110"
                y="54"
                width="38"
                height="26"
                rx="4"
                fill={`rgba(255,255,255,0.12)`}
              />
              <rect
                x="114"
                y="58"
                width="22"
                height="4"
                rx="1.5"
                fill={`rgba(255,255,255,0.18)`}
              />
              <rect
                x="114"
                y="65"
                width="16"
                height="3"
                rx="1.5"
                fill={`rgba(255,255,255,0.12)`}
              />
            </svg>
          </div>

          {/* Bilgi alanı */}
          <div style={{ padding: '10px 12px 12px' }}>
            <div
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '11.5px',
                fontWeight: 600,
                color: '#1A1A1A',
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {project.name}
            </div>
            <div style={{ marginTop: '4px' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '2px 7px',
                  backgroundColor: project.bgLight,
                  color: project.color,
                  borderRadius: '999px',
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '9.5px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {project.services[0]}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
