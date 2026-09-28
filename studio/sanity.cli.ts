import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'c5ycz3f2',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    /** Studio is hosted at https://lucaseo.sanity.studio */
    studioHost: 'lucaseo',
    appId: 'opa4eribmvm5gaq0pjbx4c4r',
  },
})
