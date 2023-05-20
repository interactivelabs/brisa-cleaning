import { defineType } from 'sanity';

export default defineType({
  title: 'Pharagraph',
  name: 'pharagraph',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Content',
      name: 'content',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
});
