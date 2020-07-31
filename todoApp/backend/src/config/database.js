const mongoose = require('mongoose');
const password = 'fA8f_GiEaXbvd2S';
const dbName = 'fundosImobiliarios'
const urlConnetion = `mongodb+srv://user01:${password}@mongodatabase01-7udss.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log('Erro na conexão com banco de dados !')
            console.log(err)
            return
        }

        console.log('Data base conected !')

    })