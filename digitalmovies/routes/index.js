var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Diego Caplan' });
});

router.get("/clase1",function(req,res){
  res.render("clase1");
});

router.get("/clase2",function(req,res){
  res.render("clase2");
});

router.get("/repaso-clase2",function(req,res){
  res.render("repaso-clase2");
});

router.get("/clase3",function(req,res){
  res.render("clase3");
});

router.get("/clase4",function(req,res){
  res.render("clase4");
});

router.get("/clase5",function(req,res){
  res.render("clase5");
});

router.get("/flex",function(req,res){
  res.render("flex");
});

router.get("/repaso-28-8",function(req,res){
  res.render("repaso-28-8");
});

router.get("/mercadoliebre",function(req,res){
  res.render("meli");
});

router.get("/register",function(req,res){
  res.render("register");
});

router.post("/register",function(req,res){
  //recibir datos
  //cargo en la bbdd
  
  res.send("recibido con exito")
});

const vistasController = require('../controllers/vistas');

router.get("/prueba-vista",vistasController.vistaPrueba);


const facebookController = require("../controllers/facebookController");
router.get("/recibir-login",facebookController.recibirLogin);

router.get("/amigos",function(req,res,next){
  let amigos = ["Carlos","Ana","Maria","Jose","Luis"];
  let usuarioLogueado = "";
  let productos = [
    {
      precio : 300,
      nombre : "Remera"
    },
    {
      precio : 200,
      nombre : "Blusa"
    },
    {
      precio : 500,
      nombre : "Pantalon"
    },
    {
      precio : 500,
      nombre : "Medias"
    },
  ]
  
  let descuentoEnPesos = 45;
  res.render("amigos",{
    amigos:amigos,
    usuarioLogueado,
    productos,
    horaDeldia: "19",
    descuentoEnPesos
  });
})

//get - muestra el form
router.get("/login",facebookController.login);
//post - recibe los datos
router.post("/login",facebookController.sendlogin);
const userController = require("../controllers/userController");
router.get("/contactos",userController.contactos);
router.get("/instagram/:usuario",userController.usuarioInstagram);


var function1 = (req,res,next)=>{
  console.log("paso por el uno");
  next()
}
var function2 = (req,res,next)=>{
  console.log("paso por el dos");
  next();
}
var function3 = (req,res,next)=>{
  console.log("paso por el tres");
  res.send("final en tres")
}

router.get("/middlewares",function1,function2,function3);

router.get("/elegir/color",function(req,res,next){
  res.render("elegirColor");
})
router.post("/elegir/color",function(req,res,next){
  res.cookie('backgroundColor',req.body.color);
  let expire = 1000*60*60*24*365*20;
  res.cookie('developer',"Romina",{maxAge:expire});
  //req.session.colorDeFondo = req.body.color;
  res.redirect("/ver/color");
});
router.get("/ver/color",function(req,res,next){
  console.log(req.cookies);
  res.render("verColor",{color : req.cookies.backgroundColor });
  //res.render("verColor",{color : req.session.colorDeFondo});
})
//cerrar sesion
router.get("/cerrar/sesion",function(req,res,next){
  req.session.destroy(()=>console.log("sesion cerrada"))
  res.redirect("/ver/color");
})
//borrar cookie
router.get("/borrar/cookie",function(req,res,next){
  clearCookie("backgroundColor");
  res.redirect("/ver/color");
})

router.get("/contador",function(req,res,next){
  var numero = req.cookies.numero;
  if(typeof numero == "undefined"){
    numero = 1;
    res.cookie("numero",numero);
  }
  res.render("contador",{numero});
})

router.get("/sumaruno",function(req,res,next){
  var numero = req.cookies.numero;
  numero = Number(numero) + 1;
  res.cookie("numero",numero);
  res.redirect("/contador")
})
router.get("/volveracero",function(req,res,next){
  res.cookie("numero",0);
  res.redirect("/contador")
})

router.get("/eventosjs",function(req,res,next){
  res.render("eventosjs");
})
//router.get("/:seccion/:titulo",vistasController.vistaContacto);
module.exports = router;
