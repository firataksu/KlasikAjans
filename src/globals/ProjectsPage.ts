import type { GlobalConfig } from 'payload'

export const ProjectsPage: GlobalConfig = {
  slug: 'projects-page',
  admin: { group: 'Sayfalar' },
  label: 'Referanslar Sayfası',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Sayfa Başlığı',
      defaultValue: 'Referanslar',
    },
    {
      name: 'subtext',
      type: 'textarea',
      label: 'Alt Metin',
      defaultValue: 'Ürettiğimiz işler. Az söz, çok iş.',
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
