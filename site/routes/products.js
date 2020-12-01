const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();
const path = require("path");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../public/images/products/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

/* Detalle producto */
router.get("/detail/:id", productController.detail)

/* Carrito de compras */
router.get("/cart", productController.cart)

/* Pagina de productos */
router.get("/", productController.productPage)

/* Crear producto */
router.get("/create", productController.create)
router.post("/create", upload.any(), productController.store)

/* editar producto */
router.get("/edit/:id", productController.edit)
router.put("/edit/:id", upload.any() ,productController.editProduct)

/* Eliminar producto */
router.delete("/delete/:id", productController.destroy)

module.exports=router;
