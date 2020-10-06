const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com/',
    user: 'b1a53e8c72d40d',
    password: '6576bf4b',
    database: 'heroku_2a2cafbb71575e6'
});
/*mysql://b1a53e8c72d40d:6576bf4b@us-cdbr-east-02.cleardb.com/heroku_2a2cafbb71575e6?reconnect=true*/
let clienteModel = {};

clienteModel.getClientes = (callback)=> {
    if (connection){
         connection.query(
             'SELECT * FROM cliente ORDER BY codigo',
                (err, rows)=>{
                if (err){
                 throw err;
                }else{
                 callback(null, rows);
                }
            }
        )
    }
};

module.exports = clienteModel;