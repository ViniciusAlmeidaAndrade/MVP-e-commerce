const express = require("express");

const middleware = require("../../middleware/validate-product.middleware.js");
const controller = require ("./product.controller.js");


const router = express.Router();

router.post("/",middleware.validateProduct, controller.createProducts);

router.get("/", controller.getProducts);

router.get("/:id", middleware.validateId, controller.getProductsId); 


module.exports = router;
