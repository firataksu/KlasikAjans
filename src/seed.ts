import { getPayload } from 'payload'
import config from './payload.config'

async function seed() {
  const payload = await getPayload({ config })

  console.log('🌱 Seed başlıyor...')

  // Admin kullanıcı oluştur (ilk kez)
  const existingUsers = await payload.find({ collection: 'users', limit: 1 })
  if (existingUsers.docs.length === 0) {
    await payload.create({
      collection: 'users',
      data: {
        name: 'Admin',
        email: 'admin@klasikajans.com',
        password: 'klasik123!',
      },
    })
    console.log('✅ Admin kullanıcı oluşturuldu: admin@klasikajans.com / klasik123!')
  }

  // Hizmetler
  const existingServices = await payload.find({ collection: 'services', limit: 1 })
  if (existingServices.docs.length === 0) {
    const services = [
      {
        title: 'Tasarım',
        shortDescription:
          'Logonuz ne anlatıyor? Kurumsal kimliğiniz güven veriyor mu? Tasarımı iş yapan bir araca dönüştürürüz.',
        order: 1,
        active: true,
      },
      {
        title: 'Video & Animasyon',
        shortDescription:
          'Ürününüzü anlatmanın en hızlı yolu göstermektir. Masaüstü video ve animasyonlarla kompleks fikirleri sade ve çarpıcı hale getiririz.',
        order: 2,
        active: true,
      },
      {
        title: 'İçerik',
        shortDescription:
          'Ne söylediğiniz kadar nasıl söylediğiniz de önemli. Markanızın sesini bulup tutarlı bir dille konuştururuz.',
        order: 3,
        active: true,
      },
      {
        title: 'Web',
        shortDescription:
          'Hızlı yüklenen, mobilde çalışan, müşteri kazandıran siteler. Süs değil, sonuç.',
        order: 4,
        active: true,
      },
    ]

    for (const service of services) {
      await payload.create({ collection: 'services', data: service })
    }
    console.log('✅ 4 hizmet oluşturuldu')
  }

  // Site ayarları
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      contact: {
        email: 'info@klasikajans.com',
        workingHours: 'Pazartesi–Cuma, 09:00–18:00',
      },
      form: {
        successMessage: 'Mesajınız alındı. En kısa sürede dönüş yapacağız.',
      },
    },
  })
  console.log('✅ Site ayarları güncellendi')

  // Hakkımızda sayfası
  await payload.updateGlobal({
    slug: 'about-page',
    data: {
      heading: 'Hakkımızda',
      values: [
        { title: 'Az toplantı.', description: 'Fikri anlıyoruz, üretime geçiyoruz.' },
        { title: 'Net iletişim.', description: 'Ne yapacağımızı, ne zaman teslim edeceğimizi söyleriz.' },
        { title: 'Zamanında teslim.', description: 'Bu bir taahhüt.' },
      ],
      cta: {
        text: 'Bir projeniz mi var?',
        buttonText: 'İletişime Geçin',
      },
    },
  })
  console.log('✅ Hakkımızda sayfası güncellendi')

  console.log('\n🎉 Seed tamamlandı!')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
