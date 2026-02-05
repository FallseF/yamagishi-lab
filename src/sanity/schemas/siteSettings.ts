import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'labName',
      title: 'Lab Name',
      type: 'object',
      fields: [
        { name: 'ja', title: 'Japanese', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    }),
    defineField({
      name: 'university',
      title: 'University',
      type: 'object',
      fields: [
        { name: 'ja', title: 'Japanese', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    }),
    defineField({
      name: 'catchphrase',
      title: 'Catchphrase',
      type: 'object',
      fields: [
        { name: 'ja', title: 'Japanese', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        { name: 'ja', title: 'Japanese', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
      ],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        { name: 'postal', title: 'Postal Code', type: 'string' },
        { name: 'ja', title: 'Japanese', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'building', title: 'Building (JA)', type: 'string' },
        { name: 'buildingEn', title: 'Building (EN)', type: 'string' },
        { name: 'room', title: 'Room', type: 'string' },
      ],
    }),
    defineField({
      name: 'directions',
      title: 'Directions',
      type: 'object',
      fields: [
        { name: 'ja', title: 'Japanese', type: 'array', of: [{ type: 'string' }] },
        { name: 'en', title: 'English', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
});
