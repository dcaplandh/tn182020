var express = require('express');
var router = express.Router();
const usersController = require("../controllers/userController");
const usersMiddleware = require("../middlewares/userMiddleware");
const { check, validationResult, body } = require('express-validator');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login',usersController.login);
router.post('/login',[
  check("email").isEmail().withMessage("Email inválido"),
  check("password").not().isEmpty().withMessage("Te olvidaste la contraseña che")
],usersController.enter);

router.get("/register",usersController.register)
router.post("/register",
  usersMiddleware.validarRol,
  [
    check("email").isEmail().withMessage("Email inválido"),
    check("nombre").isLength({min:2,max:50}).withMessage("Nombre inválido.")
  ],
  usersController.store
);

router.get("/profile/:id",usersController.showProfile);
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
