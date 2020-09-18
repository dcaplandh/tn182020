const controller = {
    vistaPrueba : function(req,res){
        res.redirect("/espectaculo/rial");
    },
    vistaContacto: function(req,res,next){
        console.log(req.params)
        //res.send("Quieren contactar a " + req.params.nombre);
        res.render("contacto",{
            seccion:req.params.seccion,
            titulo:req.params.titulo
        })  
    }
}

module.exports = controller;