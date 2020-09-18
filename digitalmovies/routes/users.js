var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login',function(req,res){
  res.send("aca logueate");
})
/*
//mostrar el formulario de creacion
router.get("/create",usersController.create);
//guardar los datos 
router.post("/create",usersController.store);
//mostrar el formulario de edicion
router.get("/edit/:id",usersController.edit);
//actualizar los datos recibidos
router.post("/edit/:id",usersController.update);
//eliminar el dato
router.post("/destroy",usersController.destroy);
router.get("/list",usersController.list);
*/

module.exports = router;
