import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Contenido de la web',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Portada'},
    {name: 'sections', title: 'Textos de secciones'},
    {name: 'contact', title: 'Contacto y pie'},
  ],
  fields: [
    // HERO
    defineField({
      name: 'heroEyebrow',
      title: 'Etiqueta superior',
      type: 'string',
      group: 'hero',
      initialValue: 'SEO · SEM · Presencia Digital',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Titular',
      type: 'string',
      description: 'Rodea una palabra con *asteriscos* para pintarla en azul. Ej: Tu negocio merece *más* clientes.',
      group: 'hero',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({name: 'heroPrimaryCta', title: 'Botón principal', type: 'string', group: 'hero'}),
    defineField({name: 'heroSecondaryCta', title: 'Botón secundario', type: 'string', group: 'hero'}),

    // SECTIONS
    defineField({name: 'servicesTag', title: 'Servicios · etiqueta', type: 'string', group: 'sections'}),
    defineField({name: 'servicesTitle', title: 'Servicios · título', type: 'string', group: 'sections'}),
    defineField({name: 'servicesBody', title: 'Servicios · texto', type: 'text', rows: 2, group: 'sections'}),

    defineField({name: 'processTag', title: 'Proceso · etiqueta', type: 'string', group: 'sections'}),
    defineField({name: 'processTitle', title: 'Proceso · título', type: 'string', group: 'sections'}),
    defineField({name: 'processBody', title: 'Proceso · texto', type: 'text', rows: 2, group: 'sections'}),

    defineField({name: 'resultsTag', title: 'Resultados · etiqueta', type: 'string', group: 'sections'}),
    defineField({name: 'resultsTitle', title: 'Resultados · título', type: 'string', group: 'sections'}),
    defineField({name: 'resultsBody', title: 'Resultados · texto', type: 'text', rows: 2, group: 'sections'}),

    defineField({name: 'clientsTag', title: 'Clientes · etiqueta', type: 'string', group: 'sections'}),
    defineField({name: 'clientsTitle', title: 'Clientes · título', type: 'string', group: 'sections'}),
    defineField({name: 'clientsBody', title: 'Clientes · texto', type: 'text', rows: 2, group: 'sections'}),

    // CONTACT
    defineField({name: 'contactTitle', title: 'Contacto · título', type: 'string', group: 'contact'}),
    defineField({name: 'contactBody', title: 'Contacto · texto', type: 'text', rows: 2, group: 'contact'}),
    defineField({
      name: 'contactBullets',
      title: 'Contacto · puntos',
      type: 'array',
      of: [{type: 'string'}],
      group: 'contact',
    }),
    defineField({name: 'contactEmail', title: 'Email de contacto', type: 'string', group: 'contact'}),
  ],
  preview: {
    prepare: () => ({title: 'Contenido de la web'}),
  },
})
