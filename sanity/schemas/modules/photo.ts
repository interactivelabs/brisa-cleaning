import { defineType } from 'sanity';

const crops = [
  { title: 'Original', value: 0 },
  { title: '1 : 1 (square)', value: 1 },
  { title: '5 : 7', value: 0.7142857143 },
  { title: '4 : 6', value: 0.6666666667 },
  { title: '16 : 9', value: 1.7777777778 },
];

export default defineType({
  title: 'Photo',
  name: 'photo',
  type: 'object',
  fields: [
    {
      title: 'Source url',
      name: 'src',
      type: 'string',
      description: 'Source of where the image is located (like S3).',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      title: 'Alternative text',
      name: 'alt',
      type: 'string',
      description: 'Important for SEO and accessiblity.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Display Size (aspect ratio)',
      name: 'customRatio',
      type: 'number',
      options: {
        list: crops,
      },
    },
  ],
});
