import { defineType } from 'sanity';

export default defineType({
  title: 'Reusable Section',
  name: 'section',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description:
        'Provide a name to reference this section. For internal use only.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        { type: 'grid' },
        { type: 'hero' },
        { type: 'marquee' },
        { type: 'dividerPhoto' },
      ],
      validation: (Rule) =>
        Rule.length(1).error('You can only have one piece of content'),
    },
  ],
});
