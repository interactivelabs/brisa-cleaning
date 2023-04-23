import { SchemaTypeDefinition } from 'sanity';

export default {
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
    },
    {
      name: 'author_name',
      type: 'string',
      title: 'Author Name',
    },
  ],
} as SchemaTypeDefinition;
