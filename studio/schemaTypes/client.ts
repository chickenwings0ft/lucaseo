import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'client',
  title: 'Cliente',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'url',
      title: 'Enlace a su web',
      type: 'url',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'darkBackground',
      title: 'Logo sobre fondo oscuro',
      description: 'Actívalo si el logo es blanco/claro y necesita un recuadro oscuro detrás',
      type: 'boolean',
      initialValue: false,
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
    select: {title: 'name', media: 'logo'},
  },
})
