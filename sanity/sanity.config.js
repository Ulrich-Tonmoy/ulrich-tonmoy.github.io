import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: ' Tonmoy Portfolio',

  projectId: 'jpwqlm1c',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool({
      defaultApiVersion: 'v2024-03-12',
      defaultDataset: 'production',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
