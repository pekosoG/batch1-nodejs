const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')

const schemaDef = `
    type Beer{
        id:ID!
        name: String!
        alcohol: Int!
        brand: String!
    }

    type Query{
        cervezas: [Beer]
        cervezas(id :Int): Beer
    }
`

const schema = makeExecutableSchema({
    "typeDefs":schemaDef
})

module.exports=schema;