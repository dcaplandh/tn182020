const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator');
const fs = require('fs');
const users = JSON.parse(fs.readFileSync(__dirname+"/../database/users.json"));


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
    },
    register:function(req,res,next){
        res.render("users/register");
    },
    store:function(req,res,next){
        let errors = validationResult(req);

        if(!errors.isEmpty() ){
            res.render("users/register",{errors:errors.errors})
        }
        let newUser = req.body;
        newUser.password = bcrypt.hashSync(newUser.password,10);
        // [A,B,C,D]
        if(users.length > 0){
            let ultimoID = users[users.length-1].id;
            newUser.id = ultimoID + 1;
        }else{
            newUser.id = 1;
        }
       
        //register
        users.push(newUser);
        fs.writeFileSync(__dirname+"/../database/users.json",JSON.stringify(users));
        req.session.usuariologueado = newUser;
        res.redirect("/users/profile/"+newUser.id);
    },
    login:function(req,res,next){
        res.render("users/login");
    },
    enter:function(req,res,next){
        let errors = validationResult(req);

        if(!errors.isEmpty() ){
            res.render("users/login",{errors:errors.errors})
        }
        //login
        //1)tener los usuarios del json (users)
        //2)recorrer los usuarios
        let userFind;
        for(var i = 0; i < users.length; i++){
            //3) condicional para ver si coincide el mail y la contraseña
            if(users[i].email == req.body.email){
                if(bcrypt.compareSync(req.body.password,users[i].password)){
                    userFind = users[i];
                    break;
                }
            } 
        }
        if(userFind){
            //res.send("Bienvenido " + userFind.nombre);
            req.session.usuariologueado = userFind;
            res.redirect("/users/profile/"+userFind.id)
        }else{
            res.render("users/login",{errorAlLoguear:"Usuario y/o contraseña invalida."});
        }
        
        //true: va a la vista de perfil (render)
        //false: "no estas registrado"
    },
    showProfile:function(req,res,next){
        //1)tomar el id
        let userId = req.params.id;
       
        //2)recorro los usuarios buscando por id
        for(var i = 0; i < users.length; i++){
            console.log(users[i].id);
            if(users[i].id == userId){
                res.render("users/profile",{user:users[i]})
            }
        }
        res.send("no existe el usuario");
        //3)if(id coincide con algun usuario)
        //true: render al perfil con los datos del usuario
        //false: aviso que el usuario no existe
    }
}

module.exports = controlador;