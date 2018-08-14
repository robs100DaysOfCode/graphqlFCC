const express = require('express');
const app = express()
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const graphiql = require('graphiql');
const mongoose = require('mongoose');
const cors = require('cors');

// ALLOW CORS on the server
app.use(cors());

mongoose.connect("mongodb://strawHatRobby:notAPassword007@ds121182.mlab.com:21182/graphql_fcc");
mongoose.connection.once('open', () => {
  console.log("Connected to Database");
})



app.use('/graphql', graphqlHTTP({
    schema,
    graphiql // without this we;ll get an error at our browser
}));

app.listen('4000', () => {
    console.log("Now running from port 4000");
});
