import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    group: 'İçerik',
    defaultColumns: ['title', 'active', 'order'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Başlık',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Açıklama (Müşteri sorunu / çözüm odaklı)',
      required: true,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      label: 'Kısa Açıklama (Kart üzerinde gösterilir)',
      maxLength: 200,
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      label: 'İkon (SVG önerilir)',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Sıra',
      defaultValue: 0,
      admin: {
        description: 'Küçük sayı önce gösterilir',
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      label: 'Aktif',
      defaultValue: true,
    },
  ],
  labels: {
    singular: 'Hizmet',
    plural: 'Hizmetler',
  },
}
