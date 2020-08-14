var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Diego Caplan' });
});

router.get("/clase1",function(req,res){
  res.render("clase1");
});

router.get("/mercadoliebre",function(req,res){
  res.render("meli");
});

module.exports = router;
