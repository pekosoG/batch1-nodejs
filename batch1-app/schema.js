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
        cerveza(id :Int): Beer
    }
`

const resolvers = {
    Query:{
        cervezas: function(){
            return [
                {
                    id: 1,
                    name:"Erdinger Dunkel",
                    alcohol: 6,
                    brand:"Erdinger"
                },
                {
                    id: 2,
                    name:"Erdinger Pikachu",
                    alcohol: 5,
                    brand:"Erdinger"
                }
            ]
        },
        cerveza: function(_,args){
            return {
                id: 1,
                name:"Erdinger Dunkel",
                alcohol: 6,
                brand:"Erdinger"
            }
        }
    }
}

const schema = makeExecutableSchema({
    "typeDefs":schemaDef,
    "resolvers":resolvers
});

module.exports=schema;