const bodyparser = require('body-parser')
const express = require('express');
const server = express();
const allowCors = require('./cors');

const port = 3003;


server.use(bodyparser.urlencoded({extended: true}));
server.use(bodyparser.json());
server.use(allowCors)


server.listen(port,()=>{
    console.log(`Backend online from port ${port}`)
})

module.exports = server
