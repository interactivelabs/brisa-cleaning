/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';

export default defineConfig({
  name: 'default',
  title: 'peru-wren',
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [deskTool(), visionTool()],
});
