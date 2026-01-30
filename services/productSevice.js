const productRepository = require ("../repositories/productRepository.js");

function createProduct(dadosProduto){
    return productRepository.createProduct(dadosProduto);
};

function getProducts(filtros){
    return productRepository.findAll(filtros);
};

function getByid(id){
    console.log('2. ID no service:', id);
    return productRepository.findById(id);
}

module.exports = {
    createProduct,
    getProducts,
    getByid
};
