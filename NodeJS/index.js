/*const os = require('os');
//const server = require('server');

console.log(os.platform());
console.log(os.release());
console.log('free mem: ', os.freemem(), ' bytes');
console.log('total mem: ', os.totalmem(), ' bytes');

const fs = require('fs');

fs.writeFile('./texto.txt', 'linea uno', function(error) {
    if (error) {
        console.log(error);
    }
    console.log('Archivo creado');
});

console.log('ultima linea de codigo');

fs.readFile('./texto.txt', function(error, data){
    if(error){
        console.log(eror);
    }
    console.log(data.toString());
});*/

/*const http = require('http');
const colors = require('colors');

//peticion= req => request -- res => response

const handleServer = function(req, res){
    res.writeHead(200, {
        'content-type': 'text/html'
        //'content-type': 'text/plain'
    });
    res.write('<h1>Hola Mundo desde Nodejs Alterado Para Ver Funcion De Actualizar El Server De NodeJs</h1>');
    //res.write('Esto es un simple texto');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on port 3000'.yellow)
})*/

const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function(req, res) {
    res.send('<h1>Hola Mundo Con Express y Nodejs</h1>');
    res.end();
})

server.listen(3000, function () {
    console.log('server on port 3000'.red);
});