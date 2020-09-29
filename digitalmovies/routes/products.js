var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController')

//requiero multer y path
const multer = require('multer');
const path = require('path');
var storage = multer.diskStorage({
	destination:(req,file,cb)=>{
        //configuro la ruta donde se guarda
		cb(null,'public/images/products');
	},
	filename:(req,file,cb)=>{
		cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});
var upload = multer({storage:storage});


//ABM   -   CRUD
//DAR DE ALTA UN PRODUCTO
router.get("/create",productsController.create);
router.post("/create", upload.any() ,productsController.store);
//MODIFICAR UN PRODUCTO
router.get("/edit/:product_id",productsController.edit);
router.post("/edit/:product_id",productsController.update);
//ELIMINAR UN PRODUCTO
router.get("/destroy/:product_id",productsController.destroy);
//LISTAR PRODUCTOS
router.get("/list",productsController.list);

module.exports = router;