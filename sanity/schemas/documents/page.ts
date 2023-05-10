import { defineType } from 'sanity';

export default defineType({
  title: 'Page',
  name: 'page',
  type: 'document',
  groups: [
    { title: 'Content', name: 'content', default: true },
    { title: 'Settings', name: 'settings' },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'settings',
    },
    {
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      description: '(required)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'settings',
    },
    {
      title: 'Page Content',
      name: 'modules',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'marquee' },
        { type: 'photo' },
        {
          title: 'Reusable Section',
          type: 'reference',
          to: [{ type: 'section' }],
        },
        { type: 'testimonials' },
      ],
      group: 'content',
    },
  ],
});
