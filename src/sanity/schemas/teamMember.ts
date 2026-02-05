import { defineType, defineField } from 'sanity';

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'object',
      fields: [
        { name: 'ja', title: 'Japanese', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'object',
      fields: [
        { name: 'ja', title: 'Japanese', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Faculty', value: 'faculty' },
          { title: 'PhD Student', value: 'phd' },
          { title: 'Master Student', value: 'master' },
          { title: 'Bachelor Student', value: 'bachelor' },
          { title: 'Alumni', value: 'alumni' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'focus',
      title: 'Research Focus',
      type: 'object',
      fields: [
        { name: 'ja', title: 'Japanese', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'email',
      title: 'Email (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name.ja',
      subtitle: 'role.ja',
      media: 'image',
    },
  },
});
