'use strict';

const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');


const app = express();
const port = process.env.PORT || 4000

app.use('/graphql', expressGraphQL({
  schema:schema,
  graphiql:true
}));

app.listen(port, (req, res) => {
  console.log('Server running on port ', port);
});
