const express = require('express');
//logica propia
//modulos ajenos
//modulos propios

const router = {
    routes : function(req,res){
        console.log("entre en la funcion routes");
        switch(req.url){
            case "/sumar":
                res.end("estoy en el home");
                break;
            case "/contacto":
                res.end("estoy en el contacto");
                break;
            default:
                res.end("not found 404");
                break;
        }
    }
}

module.exports = router;
