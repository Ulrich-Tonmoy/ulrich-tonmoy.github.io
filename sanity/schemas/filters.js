export default {
  name: 'filters',
  title: 'Filters',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'filter',
      title: 'Filter',
      type: 'array',
      of: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
      ],
    },
  ],
}
