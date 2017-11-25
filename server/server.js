var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

// TODO: connect to database, load model, parse incoming requests, register routes

app.listen(port);

console.log('CLAM API server started on: ' + port);
