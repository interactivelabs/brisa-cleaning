import { defineType } from 'sanity';

export default defineType({
  title: 'Hero',
  name: 'hero',
  type: 'object',
  fields: [
    {
      title: 'Overlay Content',
      name: 'content',
      type: 'text',
    },
    {
      title: 'Background Type',
      name: 'bgType',
      type: 'string',
      options: {
        list: [
          { title: 'Photo', value: 'photo' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'Photos',
      type: 'photos',
      hidden: ({ parent }) => {
        return parent.bgType !== 'photo';
      },
    },
    {
      name: 'video',
      type: 'video',
      hidden: ({ parent }) => {
        return parent.bgType !== 'video';
      },
    },
  ],
});
