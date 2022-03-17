const actor = {
    name: 'actor',
    type: 'document',
    fields: [
        {
            name: 'fullname',
            type: 'string',
        },
        {
            name: 'name',
            type: 'slug',
            valdiation: (Rule) => Rule.required(),
        }
    ]
}

export default actor