import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog · Artículo',
  type: 'document',
  groups: [
    {name: 'content', title: 'Contenido', default: true},
    {name: 'ctas', title: 'Botones CTA'},
    {name: 'faq', title: 'Preguntas frecuentes'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      group: 'content',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL (slug)',
      type: 'slug',
      group: 'content',
      options: {source: 'title', maxLength: 96},
      description: 'Se genera solo a partir del título. Así quedará: lucaseo.com/blog/tu-slug',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumen',
      type: 'text',
      group: 'content',
      rows: 3,
      description:
        'Aparece en la lista del blog y se usa como meta descripción para Google si no rellenas la de SEO.',
      validation: (r) => r.required().max(220),
    }),
    defineField({
      name: 'headerImage',
      title: 'Foto de cabecera',
      type: 'image',
      group: 'content',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
          description: 'Describe la imagen — importante para accesibilidad y SEO.',
          validation: (r) => r.required(),
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
      group: 'content',
      initialValue: 'Lucas',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'body',
      title: 'Contenido del artículo',
      type: 'array',
      group: 'content',
      description:
        'Usa los estilos "Título H2" y "Título H3" para tus subtítulos — el índice del artículo se genera solo a partir de ellos.',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Título H2', value: 'h2'},
            {title: 'Título H3', value: 'h3'},
            {title: 'Cita', value: 'blockquote'},
          ],
          lists: [
            {title: 'Lista con viñetas', value: 'bullet'},
            {title: 'Lista numerada', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Negrita', value: 'strong'},
              {title: 'Cursiva', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                title: 'Enlace',
                type: 'object',
                fields: [
                  {name: 'href', title: 'URL', type: 'url', validation: (r: any) => r.required()},
                  {name: 'newTab', title: 'Abrir en pestaña nueva', type: 'boolean', initialValue: false},
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {name: 'alt', title: 'Texto alternativo', type: 'string', validation: (r: any) => r.required()},
            {name: 'caption', title: 'Pie de foto (opcional)', type: 'string'},
          ],
        },
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'cta1Label',
      title: 'CTA 1 — Texto del botón',
      type: 'string',
      group: 'ctas',
      description: 'Botón principal. Aparece justo debajo de la introducción.',
      initialValue: 'Get your free consultation',
    }),
    defineField({
      name: 'cta1Href',
      title: 'CTA 1 — Enlace',
      type: 'string',
      group: 'ctas',
      initialValue: 'https://calendly.com/lucaseo/30min?back=1',
    }),
    defineField({
      name: 'cta2Label',
      title: 'CTA 2 — Texto del botón',
      type: 'string',
      group: 'ctas',
      description: 'Botón secundario. Aparece al final del artículo.',
      initialValue: 'See our services',
    }),
    defineField({
      name: 'cta2Href',
      title: 'CTA 2 — Enlace',
      type: 'string',
      group: 'ctas',
      initialValue: '/seo',
    }),
    defineField({
      name: 'faqs',
      title: 'Preguntas frecuentes',
      type: 'array',
      group: 'faq',
      description:
        'Opcional. Si añades preguntas aquí, aparece un módulo de FAQ al final del artículo — igual que en las páginas de servicios.',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'Pregunta',
          fields: [
            defineField({
              name: 'question',
              title: 'Pregunta',
              type: 'string',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Respuesta',
              type: 'text',
              rows: 3,
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: {title: 'question'},
          },
        },
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'Título SEO (opcional)',
      type: 'string',
      group: 'seo',
      description: 'Si se deja vacío se usa el título del artículo.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Descripción SEO (opcional)',
      type: 'text',
      group: 'seo',
      rows: 2,
      description: 'Si se deja vacío se usa el resumen.',
    }),
  ],
  orderings: [
    {title: 'Más recientes primero', name: 'publishedDesc', by: [{field: 'publishedAt', direction: 'desc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'excerpt', media: 'headerImage'},
  },
})
