import { defineType } from 'sanity';

export default defineType({
  title: 'Photos',
  name: 'photos',
  type: 'object',
  fields: [
    {
      title: 'Background Photo (mobile)',
      name: 'mobilePhoto',
      type: 'photo',
    },
    {
      title: 'Background Photo (desktop)',
      name: 'desktopPhoto',
      type: 'photo',
    },
  ],
});
