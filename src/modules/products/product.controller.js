const productService = require("./product.service");

async function createProducts(req, res, next){
    try {
        const newProduct = await productService.createProducts(req.body);

        res.json({
            mensagem: "produto Criado com sucesso!", 
            produto: newProduct
        });
    } catch (error) {
        res.status(400).json({error: "Erro ao criar o produto"});
    }
}

async function getProducts(req, res, next){
    try {        
        const product = await productService.getProductsAll(req.query);
        res.json(product);
    } catch (error) { 
        next(error);
    }
}

async function getProductsId(req, res, next){
    try{
        const productId = await productService.getProductsId(req.query);
        res.json(productId);
    } catch (error) {
        res.json({error: "Erro ao encontrar o produto"});
    }
}

module.exports = {
    createProducts,
    getProducts,
    getProductsId
}