const productService = require("./product.service");

async function createProducts(req, res, next){
    try {
        const newProduct = await productService.createProducts(req.body);

        res.status(201).json({
            mensagem: "produto Criado com sucesso!", 
            produto: newProduct
        });
    } catch (error) {
        next(error);;
    }
}

async function getProducts(req, res, next){
    try {        
        const product = await productService.getAllProducts(req.query);
        res.status(200).json(product);
    } catch (error) { 
        next(error);
    }
}

async function getProductsId(req, res, next){
    try{
        // const productId = await productService.getProductsId(req.product);
        // res.status(200).json(productId);
        const idParaBuscar = req.productId || req.params.id; 
        
        console.log("🔍 1. ID saindo do Controller:", idParaBuscar);

        const produto = await productService.getProductsId(idParaBuscar);
        res.status(200).json(produto);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createProducts,
    getProducts,
    getProductsId
}