const movie = {
  name: 'movie',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    {
      name: 'actor',
      type: 'reference',
      to: [{type: 'actor'}]
    },
  ],
}

export default movie
