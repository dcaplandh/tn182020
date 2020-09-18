const facebookController = {
    login:function(request,response,next){
        response.render("login");
    },
    recibirLogin:function(req,res,next){
        var usuario = req.query.usuario;
        res.render("perfil",{elUsuario:usuario})
    },
    sendlogin:function(req,res,next){
        if(req.body.usuario == "admin"){
            res.redirect("/amigos");
        }else{
            res.redirect("/login");
        }        
    }
}

module.exports = facebookController;