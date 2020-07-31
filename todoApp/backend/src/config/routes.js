const express = require('express')

module.exports = function(server){
    const router = express.Router()
    server.use('/api',router);


    const todosevice = require('../api/todo/todoService');
    todosevice.register(router,'/todos')
}
