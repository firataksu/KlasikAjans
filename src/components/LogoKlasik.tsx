type Variant = 'default' | 'light'

export default function LogoKlasik({
  variant = 'default',
  size = 'md',
}: {
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
}) {
  const scale = { sm: 0.8, md: 1, lg: 1.3 }[size]
  const fontSize = Math.round(20 * scale)

  const textColor = variant === 'light' ? '#F7F4EC' : '#1A1A1A'
  const limeColor = '#B3FF6B'

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        userSelect: 'none',
        fontFamily: 'var(--font-inter), system-ui, sans-serif',
        fontSize: `${fontSize}px`,
        fontWeight: 600,
        letterSpacing: '-0.02em',
        lineHeight: 1,
      }}
    >
      <span style={{ color: textColor }}>klasik</span>
      <span style={{ color: limeColor }}>ajans</span>
    </div>
  )
}
