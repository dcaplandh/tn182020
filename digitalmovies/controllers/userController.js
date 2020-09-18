const controlador = {
    contactos: function(req,res,next){
        let contactos = [
            {
                nombre:"Diego",
                mail:"diego@diego.com",
                username: "diegote"
            },
            {
                nombre:"Carlos",
                mail:"carlos@carlos.com",
                username: "charly"
            },
            {
                nombre:"Felipe",
                mail:"feli@feli.com",
                username: "feli"
            }
        ]
        res.render("contactos",{contactos:contactos})
    },
    usuarioInstagram:function(req,res,next){
        //POST - req.body FORMULARIO
        //GET - req.query LINK-FORMULARIO
        //RUTA - req.params
        res.send("bienvenido " + req.query.usuario);
    }
}

module.exports = controlador;