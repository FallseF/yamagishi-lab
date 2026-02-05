import { defineType, defineField } from 'sanity';

export const news = defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
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
      name: 'content',
      title: 'Content (Optional)',
      type: 'object',
      fields: [
        { name: 'ja', title: 'Japanese', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
      ],
    }),
    defineField({
      name: 'link',
      title: 'Link (Optional)',
      type: 'url',
    }),
  ],
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title.ja',
      date: 'date',
    },
    prepare({ title, date }) {
      return {
        title: title || 'Untitled',
        subtitle: date,
      };
    },
  },
});
