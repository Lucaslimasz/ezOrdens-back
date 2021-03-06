 const express = require('express');
 const routes = require('./routes');

 const app = express();
 app.use(routes);
 app.use(express.json());

 app.listen(3001, () => console.log('> Server started: 3001'))