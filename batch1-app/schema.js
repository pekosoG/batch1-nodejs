const schemaDef = `
    type Beer{
        id:ID!
        name: String!
        alcohol: Type!
        brand: String!
    }

    type Query{
        cervezas: [Beer]
        cervezas(id :Int): Beer
    }
`
