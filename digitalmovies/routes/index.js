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

module.exports = router;
