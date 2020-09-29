const middleware = {
    validarRol : function(req,res,next){
        console.log("middleware usuario");
        let newUser = req.body;
        if(newUser.rol == 1){
            next();
        }else if(newUser.rol == 2){
            res.send("Solo registro para administradores");
        }
    }
}

module.exports = middleware;