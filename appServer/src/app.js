// const express = require('express');
// const morgan = require('morgan');
// const app = express();
// const PORT = 5000;

// app.use(express.json());
// app.use(morgan('dev'));

// // rutas
// app.get('/',(req, res)=>{
//     res.json({message:'hola mundo'})
// })

// app.listen(PORT,()=>{
//     console.log('Servidor corriendo en el puerto', PORT)
// });

import express from 'express';
import morgan from 'morgan';

import pkg from '../package.json'

// requiero archivo de conexion a db
import './dataBase'

const app = express();
const PORT = 4321;

app.set('pkg',pkg);
app.use(morgan('dev'));
app.use(express.json());

app.get ('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

// importacion de rutas
import courseRoutes from './routes/course.routes'

// uso de las rutas
app.use('/api', courseRoutes)

app.listen(PORT,()=>{
    console.log('Servidor corriendo en el puerto', PORT)
})