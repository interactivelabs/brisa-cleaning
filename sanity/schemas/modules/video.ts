import { defineType } from 'sanity';

export default defineType({
  title: 'Video',
  name: 'video',
  type: 'object',
  fields: [
    {
      title: 'Background Video',
      name: 'id',
      type: 'string',
      description:
        'Alternatively, enter a vimeo ID to show a looping video instead',
    },
    {
      title: 'Background Video Title',
      name: 'title',
      type: 'string',
      description: 'Short title/description of the video',
    },
    {
      title: 'Source url',
      name: 'src',
      type: 'string',
      description: 'Source of where the video is located (like S3).',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
  ],
});
