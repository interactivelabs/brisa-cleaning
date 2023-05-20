import { defineType } from 'sanity';

export default defineType({
  title: 'Reusable Content',
  name: 'content_section',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description:
        'Provide a name to reference this content for section. For internal use only.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Content',
      name: 'modules',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'photo' },
        { type: 'testimonials' },
        { type: 'pharagraph' },
      ],
      validation: (Rule) =>
        Rule.length(1).error('You can only have one piece of content'),
    },
  ],
});
