const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const cors = require('cors');
const app = express();

//Settings seccion
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(morgan('dev'));
app.use(cors({
    origin: '*',
    credentials: true 

}));
app.use(express.json()); 


app.use('/', require('./routes/todo.routes'));



//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});

