import { defineType } from 'sanity';

export default defineType({
  title: 'Link',
  name: 'navLink',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Display Text',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'enter an external URL',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
  ],
});
