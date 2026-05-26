import type { CollectionConfig } from 'payload'

export const Team: CollectionConfig = {
  slug: 'team',
  admin: {
    useAsTitle: 'name',
    group: 'İçerik',
    defaultColumns: ['name', 'title', 'active', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Ad Soyad',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Unvan',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Biyografi',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Fotoğraf',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Sıra',
      defaultValue: 0,
    },
    {
      name: 'active',
      type: 'checkbox',
      label: 'Aktif',
      defaultValue: true,
    },
  ],
  labels: {
    singular: 'Ekip Üyesi',
    plural: 'Ekip',
  },
}
