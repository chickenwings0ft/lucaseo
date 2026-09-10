import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'lead',
  title: 'Lead (formulario)',
  type: 'document',
  // Leads se crean desde el formulario de la web, no a mano
  fields: [
    defineField({name: 'name', title: 'Nombre', type: 'string'}),
    defineField({name: 'company', title: 'Empresa', type: 'string'}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'phone', title: 'Teléfono', type: 'string'}),
    defineField({name: 'preference', title: 'Prefiere contacto por', type: 'string'}),
    defineField({name: 'goal', title: 'Objetivo', type: 'string'}),
    defineField({name: 'message', title: 'Mensaje', type: 'text', rows: 4}),
    defineField({name: 'submittedAt', title: 'Recibido', type: 'datetime', readOnly: true}),
    defineField({
      name: 'status',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          {title: 'Nuevo', value: 'new'},
          {title: 'Contactado', value: 'contacted'},
          {title: 'Cliente', value: 'won'},
          {title: 'Descartado', value: 'lost'},
        ],
        layout: 'radio',
      },
      initialValue: 'new',
    }),
  ],
  orderings: [
    {title: 'Más recientes', name: 'dateDesc', by: [{field: 'submittedAt', direction: 'desc'}]},
  ],
  preview: {
    select: {title: 'name', company: 'company', email: 'email', date: 'submittedAt'},
    prepare: ({title, company, email, date}) => ({
      title: title || email || 'Lead sin nombre',
      subtitle: [company, date && new Date(date).toLocaleDateString('es-ES')].filter(Boolean).join(' · '),
    }),
  },
})
