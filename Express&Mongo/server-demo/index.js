const express = require('express');
const server = express();
const port = 3000;

server.get('/', (req, res) => res.send('Hello World!'));

server.get('/api/users', (req, res) => res.send({id:1, name:"John", age:40}));

server.listen(port, () => console.log(`Example app listening on port ${port}!`));
