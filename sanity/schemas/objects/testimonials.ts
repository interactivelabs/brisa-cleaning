import { defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  type: 'object',
  title: 'Testimonial',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author_name',
      type: 'string',
      title: 'Author Name',
      validation: (Rule) => Rule.required(),
    },
  ],
});
