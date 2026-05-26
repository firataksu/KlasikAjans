import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  admin: {
    group: 'Sayfalar',
  },
  label: 'Ana Sayfa',
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Bölümü',
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Başlık',
          defaultValue: 'Dijital işler, elle tutulur sonuçlar.',
          required: true,
        },
        {
          name: 'subtext',
          type: 'textarea',
          label: 'Alt Metin',
          defaultValue:
            'Klasik Ajans; tasarım, video animasyon, içerik ve web alanlarında hızlı, temiz ve etkili çözümler üretir. Fazla toplantı yok, uzun süreç yok. Sadece iş.',
        },
        {
          name: 'primaryCta',
          type: 'group',
          label: 'Birincil CTA',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Buton Metni',
              defaultValue: 'Hizmetlere Bak',
            },
            {
              name: 'link',
              type: 'text',
              label: 'Link',
              defaultValue: '/hizmetler',
            },
          ],
        },
        {
          name: 'secondaryCta',
          type: 'group',
          label: 'İkincil CTA',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Buton Metni',
              defaultValue: 'Projeyi Konuşalım',
            },
            {
              name: 'link',
              type: 'text',
              label: 'Link',
              defaultValue: '/iletisim',
            },
          ],
        },
      ],
    },
    {
      name: 'servicesSection',
      type: 'group',
      label: '"Ne Yapıyoruz" Bölümü',
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Başlık',
          defaultValue: 'Ne Yapıyoruz',
        },
        {
          name: 'subtext',
          type: 'text',
          label: 'Alt Metin',
          defaultValue: 'Tasarımdan web\'e, içerikten animasyona dört alanda üretim yapıyoruz.',
        },
      ],
    },
    {
      name: 'projectsSection',
      type: 'group',
      label: '"Seçili Çalışmalar" Bölümü',
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Başlık',
          defaultValue: 'Seçili Çalışmalar',
        },
      ],
    },
    {
      name: 'manifesto',
      type: 'group',
      label: '"Neden Klasik Ajans?" Bölümü',
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Başlık',
          defaultValue: 'Neden Klasik Ajans?',
        },
        {
          name: 'body',
          type: 'richText',
          label: 'Ana Metin',
        },
        {
          name: 'points',
          type: 'array',
          label: 'Maddeler',
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
      ],
    },
    {
      name: 'ctaSection',
      type: 'group',
      label: 'Alt CTA Bölümü',
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Başlık',
          defaultValue: 'Bir projeniz mi var?',
        },
        {
          name: 'subtext',
          type: 'text',
          label: 'Alt Metin',
          defaultValue: 'Hızlı bir mesajla başlayalım.',
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Buton Metni',
          defaultValue: 'Projenizi Konuşalım',
        },
      ],
    },
  ],
}
