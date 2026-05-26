import type { CollectionConfig } from 'payload'

export const ContactMessages: CollectionConfig = {
  slug: 'contact-messages',
  admin: {
    useAsTitle: 'name',
    group: 'İletişim',
    defaultColumns: ['name', 'email', 'service', 'read', 'createdAt'],
  },
  access: {
    create: () => true,
    read: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Ad Soyad',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-posta',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefon',
    },
    {
      name: 'service',
      type: 'select',
      label: 'Hizmet',
      options: [
        { label: 'Tasarım', value: 'tasarim' },
        { label: 'Video & Animasyon', value: 'video-animasyon' },
        { label: 'İçerik', value: 'icerik' },
        { label: 'Web', value: 'web' },
        { label: 'Diğer', value: 'diger' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Mesaj',
      required: true,
    },
    {
      name: 'read',
      type: 'checkbox',
      label: 'Okundu',
      defaultValue: false,
    },
  ],
  timestamps: true,
  labels: {
    singular: 'Mesaj',
    plural: 'Gelen Mesajlar',
  },
}
