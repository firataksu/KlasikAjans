import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'projectName',
    group: 'İçerik',
    defaultColumns: ['projectName', 'category', 'featured', 'active'],
  },
  fields: [
    {
      name: 'projectName',
      type: 'text',
      label: 'Proje Adı',
      required: true,
    },
    {
      name: 'clientName',
      type: 'text',
      label: 'Müşteri Adı',
    },
    {
      name: 'showClientName',
      type: 'checkbox',
      label: 'Müşteri adını göster',
      defaultValue: true,
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Kapak Görseli',
      required: true,
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Ek Görseller',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Görsel',
          required: true,
        },
      ],
    },
    {
      name: 'category',
      type: 'select',
      label: 'Kategori',
      options: [
        { label: 'Tasarım', value: 'tasarim' },
        { label: 'Video & Animasyon', value: 'video-animasyon' },
        { label: 'İçerik', value: 'icerik' },
        { label: 'Web', value: 'web' },
      ],
      required: true,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      label: 'Kısa Açıklama (Kart üzerinde)',
      maxLength: 300,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Uzun Açıklama (Detay sayfası)',
    },
    {
      name: 'clientQuote',
      type: 'text',
      label: 'Müşteri Alıntısı (Opsiyonel — kısa, sosyal kanıt)',
      admin: {
        description: 'Örn: "3 haftada teslim aldık."',
      },
    },
    {
      name: 'highlight',
      type: 'text',
      label: 'Öne Çıkan Sonuç / Detay (Opsiyonel)',
      admin: {
        description: 'Örn: "Sıfırdan marka kimliği", "2 haftada teslim"',
      },
    },
    {
      name: 'year',
      type: 'number',
      label: 'Yıl',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Ana sayfada öne çıkar',
      defaultValue: false,
    },
    {
      name: 'active',
      type: 'checkbox',
      label: 'Aktif',
      defaultValue: true,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Sıra',
      defaultValue: 0,
    },
  ],
  labels: {
    singular: 'Referans',
    plural: 'Referanslar',
  },
}
