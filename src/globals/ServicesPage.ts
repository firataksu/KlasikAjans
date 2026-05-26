import type { GlobalConfig } from 'payload'

export const ServicesPage: GlobalConfig = {
  slug: 'services-page',
  admin: { group: 'Sayfalar' },
  label: 'Hizmetler Sayfası',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Sayfa Başlığı',
      defaultValue: 'Hizmetler',
    },
    {
      name: 'subtext',
      type: 'textarea',
      label: 'Alt Metin',
      defaultValue: 'Tasarımdan web\'e dört alanda üretim yapıyoruz. Süs değil, sonuç.',
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        { name: 'title', type: 'text', label: 'Meta Başlık' },
        { name: 'description', type: 'textarea', label: 'Meta Açıklama' },
        { name: 'ogImage', type: 'upload', relationTo: 'media', label: 'OG Görseli' },
      ],
    },
  ],
}
