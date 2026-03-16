const express = require("express");
const {validateProduct, validateId} = require("../../middleware/validate-product.middleware.js");
const {createProducts, getProducts,getProductsId} = require ("./product.controller.js");


const router = express.Router();

router.post("/", validateProduct, createProducts, (req, res, next) => {
    // try {
    //     const novoProduto = productService.createProduct(req.body);

    //     res.status(201).json({
    //         mensagem: "produto Criado com sucesso!", 
    //         produto: novoProduto
    //     });
    // } catch (error) {
    //     res.status(400).json({error: "Erro ao criar o produto"});
    // }
});

router.get("/", getProductsId, (req, res, next) => {
    // try {        
    //     const produtos = productService.getProductsAll(req.query);
    //     res.status(200).json(produtos);
    // } catch (error) { 
    //     next(error);
    //     }
});

router.get("/:id", validateId, getProductsId, (req, res, next) => {
    // const id = req.productId;
    // console.log('1. ID na rota:', id, 'tipo:', typeof id);

    // const produto = productController.getProductsId(id);
    // console.log('4. Produto retornado:', produto);

    // if(!produto) {
    //     return res.status(404).json({
    //         error:`produto de id: ${id} não encontrado`});
    // };

    res.status(200).json(produto);
}); 


module.exports = router;
