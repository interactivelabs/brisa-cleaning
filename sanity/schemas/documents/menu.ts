import { defineType } from 'sanity';

export default defineType({
  title: 'Menu',
  name: 'menu',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'required',
      options: {
        source: 'title',
        maxLength: 30,
      },
    },
    {
      title: 'Nav Items',
      name: 'items',
      type: 'array',
      of: [{ type: 'navPage' }, { type: 'navLink' }, { type: 'navDropdown' }],
    },
  ],
});
