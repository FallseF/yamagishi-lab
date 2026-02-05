import { defineType, defineField } from 'sanity';

export const researchArea = defineType({
  name: 'researchArea',
  title: 'Research Area',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'ja', title: 'Japanese', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'object',
      fields: [
        {
          name: 'challenge',
          title: 'Challenge',
          type: 'object',
          fields: [
            { name: 'ja', title: 'Japanese', type: 'string' },
            { name: 'en', title: 'English', type: 'string' },
          ],
        },
        {
          name: 'approach',
          title: 'Approach',
          type: 'object',
          fields: [
            { name: 'ja', title: 'Japanese', type: 'string' },
            { name: 'en', title: 'English', type: 'string' },
          ],
        },
        {
          name: 'outcome',
          title: 'Outcome',
          type: 'object',
          fields: [
            { name: 'ja', title: 'Japanese', type: 'string' },
            { name: 'en', title: 'English', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'object',
      fields: [
        { name: 'ja', title: 'Japanese', type: 'array', of: [{ type: 'text' }] },
        { name: 'en', title: 'English', type: 'array', of: [{ type: 'text' }] },
      ],
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
      title: 'title.ja',
      media: 'image',
    },
  },
});
