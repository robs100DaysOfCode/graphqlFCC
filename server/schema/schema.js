const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt  } = graphql; // ES^ destructuring

var books  = [
    {name:'Harry Potter and the Prisoner of Azkaban', genre:'Fiction', id:'1', authorId:'1'},
    {name:'God Father', genre:'Drama', id:'2', authorId:'2'},
    {name:'NottingHill with Love', genre:'Fiction', id:'3', authorId:'3'},
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
          type: AuthorType,
          resolve(parent, args){
            return _.find(authors, { id: parent.authorId })
          }
        }
    })
})

var authors = [
    {name: 'J.K Rowling',  age: 55, id:'1'},
    {name: 'Mario Puzo',  age: 78, id:'2'},
    {name: 'Palo Colhio',  age: 60, id:'3'},
]

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: {type: GraphQLID} }, //the query takes an id of tpye stirng
            resolve(parent, args){
                // code to get data from db or any other source will come here
                return _.find(books, { id: args.id })
            }
        },
        author: {
            type: AuthorType,
            args: { id: {type: GraphQLID} }, //the query takes an id of tpye stirng
            resolve(parent, args){
                // code to get data from db or any other source will come here
                return _.find(authors, { id: args.id })
            }
        }
    }
})


module.exports = new GraphQLSchema({
    // intial root query
    query: RootQuery
})
