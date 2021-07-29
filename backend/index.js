require('dotenv').config();
const express = require('express');
const routers = require('./routers');
const mongoose = require('mongoose');
const {URL_CONNECTION,DB}= process.env

//conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect(`${URL_CONNECTION}${DB}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
},()=>{
    console.log('conectado a la db')
});
//crear el servidor
const app = express();
// app.use(express.json());
//habilitar el parseo de los datos
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//rutas de la app
app.use('/',routers())

app.listen(5001,()=>{
    console.log('corriendo')
})