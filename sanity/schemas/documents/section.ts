import { defineType } from 'sanity';

export default defineType({
  title: 'Section',
  name: 'section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Contents',
      name: 'modules',
      type: 'array',
      of: [{ type: 'hero' }, { type: 'photo' }, { type: 'content_section' }],
    },
  ],
});
