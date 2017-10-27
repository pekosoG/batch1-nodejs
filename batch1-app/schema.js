const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
let models = require('./db/models');

const schemaDef = `
    type Beer{
        id:ID!
        name: String!
        alcohol: Float!
        brand: Int!
        description: String
        volume: Float
        price: Float
    }

    input NewBeer {
        name: String!
        alcohol: Float!
        brand: Int!
        description: String
        volume: Float
        price: Float
    }

    input UpdateBeer {
        id: Int!
        name: String
        alcohol: Float
        brand: Int
        description: String
        volume: Float
        price: Float
    }

    type Query{
        cervezas: [Beer]
        cerveza(id :Int): Beer
    }

    type Mutation{
        addBeer(beer: NewBeer): Beer
        updateBeer(beer: UpdateBeer): Beer
        deleteBeer(id: Int): Beer
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
    },

    Mutation:{
        addBeer: function(_,args){
            return models.Beer.create(args.beer);
        },
        updateBeer:function(_,args){
            models.Beer.update(args.beer,{where:{id:args.beer.id}});
            return models.Beer.findOne({where:{id:args.beer.id}});
        },
        deleteBeer: function(_,args){–
            beer= models.Beer.findOne({where:{id:args.id}});
            models.Beer.destroy({where:{id:args.id}});
            return beer;
        }
    }
}

const schema = makeExecutableSchema({
    "typeDefs":schemaDef,
    "resolvers":resolvers,
});

module.exports=schema;