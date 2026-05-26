import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Ayarlar',
  },
  label: 'Site Ayarları',
  fields: [
    {
      name: 'contact',
      type: 'group',
      label: 'İletişim Bilgileri',
      fields: [
        {
          name: 'email',
          type: 'email',
          label: 'E-posta',
          defaultValue: 'info@klasikajans.com',
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Telefon',
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'Adres',
        },
        {
          name: 'workingHours',
          type: 'text',
          label: 'Çalışma Saatleri',
          defaultValue: 'Pazartesi–Cuma, 09:00–18:00',
        },
      ],
    },
    {
      name: 'social',
      type: 'group',
      label: 'Sosyal Medya',
      fields: [
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram URL',
        },
        {
          name: 'linkedin',
          type: 'text',
          label: 'LinkedIn URL',
        },
        {
          name: 'twitter',
          type: 'text',
          label: 'Twitter / X URL',
        },
        {
          name: 'behance',
          type: 'text',
          label: 'Behance URL',
        },
      ],
    },
    {
      name: 'form',
      type: 'group',
      label: 'Form Ayarları',
      fields: [
        {
          name: 'notificationEmail',
          type: 'email',
          label: 'Bildirim E-postası (form gelince buraya gönderilir)',
        },
        {
          name: 'successMessage',
          type: 'textarea',
          label: 'Başarı Mesajı',
          defaultValue: 'Mesajınız alındı. En kısa sürede dönüş yapacağız.',
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'Varsayılan SEO',
      fields: [
        {
          name: 'defaultTitle',
          type: 'text',
          label: 'Varsayılan Sayfa Başlığı',
          defaultValue: 'Klasik Ajans — Tasarım, Video, İçerik, Web',
        },
        {
          name: 'defaultDescription',
          type: 'textarea',
          label: 'Varsayılan Meta Açıklama',
          defaultValue:
            'Klasik Ajans; tasarım, video animasyon, içerik ve web alanlarında hızlı ve etkili çözümler üretir.',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Varsayılan OG Görseli',
        },
      ],
    },
  ],
}
