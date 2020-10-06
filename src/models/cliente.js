const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_sistema_seguros'
});

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