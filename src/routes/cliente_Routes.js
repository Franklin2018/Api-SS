/*const express = require('express');
const router = express.Router();

router.get('/', (res, req)=>{
    res.json([]);
});

module.exports = router;*/
const cliente = require('../models/cliente');

module.exports = function (app){
    app.get('/clientes', (req, res) =>{
       cliente.getClientes((err, data)=>{
        res.status(200).json(data);
       });
    });
}