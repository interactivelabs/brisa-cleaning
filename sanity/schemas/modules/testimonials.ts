import { defineType } from 'sanity';

export default defineType({
  title: 'Testimonials',
  name: 'testimonials',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Module Content',
      name: 'modules',
      type: 'array',
      of: [{ type: 'testimonial' }],
    },
  ],
});
