import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

const singletons = ['siteSettings']

export default defineConfig({
  name: 'default',
  title: 'Lucaseo',

  projectId: 'c5ycz3f2',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletons.includes(schemaType)),
  },

  document: {
    actions: (input, {schemaType}) =>
      singletons.includes(schemaType)
        ? input.filter(({action}) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : input,
  },
})
