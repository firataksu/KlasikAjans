import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  admin: { group: 'Sayfalar' },
  label: 'Hakkımızda Sayfası',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Sayfa Başlığı',
      defaultValue: 'Hakkımızda',
    },
    {
      name: 'body',
      type: 'richText',
      label: 'Ana Metin (Ajansın hikayesi)',
    },
    {
      name: 'values',
      type: 'array',
      label: 'Değerler / Prensipler',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Başlık',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Açıklama',
        },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Alt CTA',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Metin',
          defaultValue: 'Bir projeniz mi var?',
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Buton Metni',
          defaultValue: 'İletişime Geçin',
        },
      ],
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
