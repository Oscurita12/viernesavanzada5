//const express = require('express') FORMA VIEJA DE IMPORTAR 
import express from 'express'

//Traigo librería que controla variables de entorno 
import * as dotenv from 'dotenv' 
dotenv.config()
console.log(process.env.PORT)

//app Es la variable que almacena toda la funcionalidad de 
const app = express()

//ATENDIENDO PETICIONES Y RESPONDIENDO

//1. PETICIÓN DE TIPO GET 
app.get('/hotelesFlork/habitaciones', function (req, res) {
  res.send('Estoy buscando todas las habitaciones')
})

//2. PETICIÓN DE TIPO GET PARA BUSCAR HABITACIÓN POR ID 
app.get('/hotelesFlorK/habitacion/:id', function (req, res) {
    res.send('Estoy buscando una habitación por id')
})

//3. PETICIÓN DE TIPO POST PARA AGREGAR HABITACIÓN EN BD 
app.post('/hotelesFlork/habitacion', function (req, res) {
    res.send('Estoy agregando una habitación')
})

//4. PETICIÓN DE TIPO PUT PARA EDITAR UNA HABITACIÓN 
app.put('/hotelesFlork/modificarhabitacion', function (req, res) {
    res.send('Estoy modificando la habitatcion')
})
  

//ENCENDIENDO EL SERVIDOR EN EL PUERTO 3000
app.listen(process.env.PORT, function(){
    console.log("SERVIDOR ENCENDIDO ")
})