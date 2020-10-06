const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_sistema_seguros'
});

let establecimientoModel = {};

establecimientoModel.getEstablecimientos = (callback)=> {
    if (connection){
         connection.query(
             'SELECT * FROM establecimiento  ORDER BY id',
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

module.exports = establecimientoModel;