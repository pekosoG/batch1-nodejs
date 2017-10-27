const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
let models = require('./db/models');

const schemaDef = `
    type Beer{
        id:ID!
        name: String!
        alcohol: Float!
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
            return models.Beer.findAll();
        },
        cerveza: function(_,args){
            return models.Beer.findOne({where:{id:args.id}});
        }
    }
}

const schema = makeExecutableSchema({
    "typeDefs":schemaDef,
    "resolvers":resolvers
});

module.exports=schema;