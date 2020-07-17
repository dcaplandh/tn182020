//const express = require('express');
//const app = express();
const http = require('http');
const router = require('./routes');

    /*app.listen(3000,function(){
        console.log("servidor prendido...");
    })

    app.get("/home",function(request,response){
        response.send("estoy en el home")
    });

    app.get("/contacto",function(request,response){
    response.send("contactanos!")
});
*/

http.createServer( function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
    router.routes(req,res);
}).listen(3000,'localhost',function(){
console.log("servidor prendido en 3000")
})
