import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { name, email, phone, service, message, website } = body

    // Honeypot kontrolü
    if (website) {
      return NextResponse.json({ ok: true })
    }

    // Basit validasyon
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Ad, e-posta ve mesaj alanları zorunludur.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Geçerli bir e-posta adresi girin.' }, { status: 400 })
    }

    const payload = await getPayload({ config })

    // Mesajı veritabanına kaydet
    await payload.create({
      collection: 'contact-messages',
      data: {
        name: String(name).slice(0, 200),
        email: String(email).slice(0, 200),
        phone: phone ? String(phone).slice(0, 50) : undefined,
        service: service || undefined,
        message: String(message).slice(0, 5000),
        read: false,
      },
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Sunucu hatası. Lütfen tekrar deneyin.' }, { status: 500 })
  }
}
