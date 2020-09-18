var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController')

//ABM   -   CRUD
//DAR DE ALTA UN PRODUCTO
router.get("/create",productsController.create);
router.post("/create",productsController.store);
//MODIFICAR UN PRODUCTO
router.get("/edit/:product_id",productsController.edit);
router.post("/edit/:product_id",productsController.update);
//ELIMINAR UN PRODUCTO
router.get("/destroy/:product_id",productsController.destroy);
//LISTAR PRODUCTOS
router.get("/list",productsController.list);

module.exports = router;