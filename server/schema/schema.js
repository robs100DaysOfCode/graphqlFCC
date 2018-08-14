const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema  } = graphql; // ES^ destructuring

var books  = [
    {name:'Harry Potter and the Prisoner of Azkaban', genre:'Fiction', id:'1'},
    {name:'God Father', genre:'Drama', id:'2'},
    {name:'NottingHill with Love', genre:'Fiction', id:'3'},
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: {type: GraphQLString} }, //the query takes an id of tpye stirng
            resolve(parent, args){
                // code to get data from db or any other source will come here
            }
        }
    }
})


module.exports = new GraphQLSchema({
    // intial root query
    query: RootQuery
})
