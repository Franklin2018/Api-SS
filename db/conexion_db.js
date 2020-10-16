const mysql = require('mysql');

const mySqlconnection = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b1a53e8c72d40d',
    password: '6576bf4b',
    database: 'heroku_2a2cafbb71575e6'
});
/*
const mySqlconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_sistema_seguros'
});*/


mySqlconnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('DB connected')
    }
});

module.exports = mySqlconnection;