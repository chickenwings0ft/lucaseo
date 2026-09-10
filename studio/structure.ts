import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Lucaseo')
    .items([
      S.listItem()
        .title('Contenido de la web')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('service').title('Servicios'),
      S.documentTypeListItem('processStep').title('Pasos del proceso'),
      S.documentTypeListItem('caseStudy').title('Casos / Resultados'),
      S.documentTypeListItem('stat').title('Métricas'),
      S.documentTypeListItem('client').title('Clientes'),
      S.divider(),
      S.documentTypeListItem('lead').title('Leads (formulario)'),
    ])
