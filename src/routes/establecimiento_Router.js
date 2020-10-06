const establecimiento = require('../models/establecimiento');

module.exports = function (app){
    app.get('/establecimientos', (req, res) =>{
       establecimiento.getEstablecimientos((err, data)=>{
        res.status(200).json(data);
       });
    });
}