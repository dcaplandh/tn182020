//const http = require('http');
const router = require('./routes');
const express = require('express');
const app = express();

/*
http.createServer( function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
    router.routes(req,res);
}).listen(3000,'localhost',function(){
console.log("servidor prendido en 3000")
})
*/

app.listen(3000,function(){
    console.log("servidor prendido...");
})

//app.get(RUTA,FUNCION(req,res){})

app.get("/home",function(request,response){
    response.send("estoy en el home, bienvenido!")
});

app.get("/contacto",function(request,response){
    response.send("contactanos!")
});

app.get("/bienvenido/:nombre",function(req,res){
    let nombreQueLlega = req.params.nombre;
    res.send("Bienvenido "+nombreQueLlega+"!");
})

app.get("/watch/:v",function(req,res){
    res.send({nombre:"Diego",apellido:"Caplan"})
})

