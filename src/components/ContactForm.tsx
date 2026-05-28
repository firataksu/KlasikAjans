'use client'

import { useState } from 'react'

const serviceOptions = [
  { value: 'tasarim', label: 'Tasarım' },
  { value: 'video-animasyon', label: 'Video & Animasyon' },
  { value: 'icerik', label: 'İçerik' },
  { value: 'web', label: 'Web' },
  { value: 'diger', label: 'Diğer' },
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-inter)',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'rgba(240,236,228,0.45)',
  marginBottom: '8px',
}

export default function ContactForm({ successMessage }: { successMessage?: string }) {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error || 'Bir hata oluştu.')
      }

      setFormState('success')
      form.reset()
    } catch (err) {
      setFormState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Bir hata oluştu.')
    }
  }

  if (formState === 'success') {
    return (
      <div
        style={{
          padding: '2.5rem',
          backgroundColor: 'rgba(179,255,107,0.06)',
          border: '1px solid rgba(179,255,107,0.2)',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(179,255,107,0.12)',
            border: '1px solid rgba(179,255,107,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l4.5 4.5L16 6" stroke="#B3FF6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            fontWeight: 600,
            color: '#F0ECE4',
            marginBottom: '0.5rem',
          }}
        >
          Mesajınız alındı.
        </p>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13.5px', color: 'rgba(240,236,228,0.5)' }}>
          {successMessage || 'En kısa sürede dönüş yapacağız.'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Ad Soyad + E-posta — yan yana */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <label style={labelStyle}>
            Ad Soyad <span style={{ color: 'rgba(240,236,228,0.2)' }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            className="form-input"
            placeholder="Adınız"
          />
        </div>
        <div>
          <label style={labelStyle}>
            E-posta <span style={{ color: 'rgba(240,236,228,0.2)' }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="form-input"
            placeholder="ornek@sirket.com"
          />
        </div>
      </div>

      {/* Telefon */}
      <div>
        <label style={labelStyle}>
          Telefon{' '}
          <span style={{ fontSize: '10px', fontWeight: 400, letterSpacing: 0, textTransform: 'none', color: 'rgba(240,236,228,0.25)' }}>
            (opsiyonel)
          </span>
        </label>
        <input
          type="tel"
          name="phone"
          className="form-input"
          placeholder="+90 5xx xxx xx xx"
        />
      </div>

      {/* Hizmet */}
      <div>
        <label style={labelStyle}>
          Ne üzerine konuşmak istersiniz?
        </label>
        <select name="service" className="form-input" style={{ cursor: 'pointer' }}>
          <option value="">Seçiniz…</option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Mesaj */}
      <div>
        <label style={labelStyle}>
          Mesaj <span style={{ color: 'rgba(240,236,228,0.2)' }}>*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="form-input"
          placeholder="Projenizi kısaca anlatın…"
          style={{ resize: 'vertical', fontFamily: 'var(--font-inter)' }}
        />
      </div>

      {/* Honeypot */}
      <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />

      {formState === 'error' && (
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '13px',
            color: '#F87171',
            padding: '10px 14px',
            backgroundColor: 'rgba(248,113,113,0.1)',
            border: '1px solid rgba(248,113,113,0.2)',
            borderRadius: '6px',
          }}
        >
          {errorMsg}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={formState === 'loading'}
          className="btn-lime"
          style={{
            opacity: formState === 'loading' ? 0.65 : 1,
            cursor: formState === 'loading' ? 'not-allowed' : 'pointer',
          }}
        >
          {formState === 'loading' ? 'Gönderiliyor…' : 'Gönder'}
        </button>
      </div>
    </form>
  )
}
