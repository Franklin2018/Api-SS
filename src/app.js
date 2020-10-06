const express = require('express');
const app     = express();


const morgan     = require('morgan');
const bodyparser = require('body-parser');
//settings
app.set( 'port', process.env.PORT || 3000);

app.listen( app.get('port'), ()=> {
    console.log('server on port 3000');
});

//routes
require('./routes/cliente_Routes') (app);
require('./routes/establecimiento_Router')(app);


//middlewares
app.use(morgan ('dev'));
app.use(bodyparser.json());