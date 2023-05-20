import { createClient } from 'next-sanity';
import { dataset, projectId, useCdn, apiVersion } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});
