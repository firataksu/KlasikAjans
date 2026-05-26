import type { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  admin: { group: 'Sayfalar' },
  label: 'İletişim Sayfası',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Sayfa Başlığı',
      defaultValue: 'İletişime Geçin',
    },
    {
      name: 'subtext',
      type: 'textarea',
      label: 'Davet Metni',
      defaultValue: 'Projenizi anlatın. En kısa sürede dönüş yapalım.',
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
