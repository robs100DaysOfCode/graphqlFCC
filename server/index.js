const express = require('express');
const app = express() 
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const graphiql = require('graphiql');

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql // without this we;ll get an error at our browser
}));

app.listen('4000', () => {
    console.log("Now running from port 4000");
});



