import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Caso / Resultado',
  type: 'document',
  fields: [
    defineField({
      name: 'result',
      title: 'Resultado destacado',
      type: 'string',
      description: 'Ej. +520%, 3.8x ROI, #1 Google',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'context',
      title: 'Contexto',
      type: 'text',
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
      description: 'Ej. Salud · Clínica Dental',
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [{title: 'Orden', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {
    select: {title: 'result', subtitle: 'sector'},
  },
})
