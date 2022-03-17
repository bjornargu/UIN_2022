const actor = {
    name: 'actor',
    type: 'document',
    fields: [
        {
            name: 'fullname',
            type: 'string',
        },
        {
            name: 'slug',
            type: 'slug',
            valdiation: (Rule) => Rule.required(),
        }
    ]
}

export default actor