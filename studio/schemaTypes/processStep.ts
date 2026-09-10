import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'processStep',
  title: 'Paso del proceso',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Etiqueta',
      type: 'string',
      description: 'Ej. 01 — Diagnóstico',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      validation: (r) => r.required(),
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
    select: {title: 'title', subtitle: 'label'},
  },
})
