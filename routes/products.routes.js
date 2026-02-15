const express = require("express");
const {validateProduct, validateId} = require("../middleware/validateProduct");
const productService = require ("../services/productSevice.js")


const router = express.Router();

router.post("/products", validateProduct, (req, res) => {
    const novoProduto = productService.createProduct(req.body);
    
        res.status(201).json({
            mensagem: "produto Criado com sucesso!", 
            produto: novoProduto
        });
});

router.get("/products", (req, res) => {
    console.log("Query params recebidos:", req.query);
    
    const produtos = productService.getProducts(req.query);

    res.status(200).json(produtos);
});

router.get("/products/:id", validateId, (req, res) => {
    const id = req.productId;
    console.log('1. ID na rota:', id, 'tipo:', typeof id);

    const produto = productService.getByid(id);
    console.log('4. Produto retornado:', produto);

    if(!produto) {
        return res.status(404).json({
            error:`produto de id: ${id} não encontrado`});
    };

    res.status(200).json(produto);
}); 


module.exports = router;
