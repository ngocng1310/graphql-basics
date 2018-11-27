const express = require('express');
//import express from 'express';
const graphqlHTTP = require('express-graphql');
const schema = require('./schema') ;

const app  = express();

app.get('/', (req, res) => {
    res.send('GraphQL is great!');
});

const root = { hello: () => "Hi, I'm Ngoc" };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));
