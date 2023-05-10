import { defineType } from 'sanity';

export default defineType({
  title: 'Marquee',
  name: 'marquee',
  type: 'object',
  fieldsets: [
    {
      title: '',
      name: 'options',
      options: { columns: 2 },
    },
  ],
  fields: [
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        {
          title: 'Text',
          name: 'simple',
          type: 'object',
          fields: [
            {
              title: 'Text',
              name: 'text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          title: 'Promo Photo',
          name: 'promoPhoto',
          type: 'photo',
        },
      ],
      validation: (Rule) => Rule.min(1).required(),
    },
    {
      title: 'Speed',
      name: 'speed',
      type: 'number',
      description: 'Pick a number between 0-1 (0.5 is the default)',
      initialValue: 0.5,
      validation: (Rule) => Rule.min(0).max(1).precision(1),
    },
    {
      title: 'Reverse direction?',
      name: 'reverse',
      type: 'boolean',
      initialValue: false,
      fieldset: 'options',
    },
    {
      title: 'Pause on hover?',
      name: 'pausable',
      type: 'boolean',
      initialValue: false,
      fieldset: 'options',
    },
  ],
});
