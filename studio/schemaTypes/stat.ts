import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'stat',
  title: 'Métrica',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Valor numérico',
      type: 'number',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'suffix',
      title: 'Sufijo',
      type: 'string',
      description: 'Ej. %, x, +, " días"',
    }),
    defineField({
      name: 'decimal',
      title: 'Mostrar con decimal',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'label',
      title: 'Descripción',
      type: 'string',
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
    select: {value: 'value', suffix: 'suffix', label: 'label'},
    prepare: ({value, suffix, label}) => ({title: `${value}${suffix || ''}`, subtitle: label}),
  },
})
