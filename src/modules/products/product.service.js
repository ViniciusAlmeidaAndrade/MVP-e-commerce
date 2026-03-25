const productRepository = require ("./product.Repository.js");
const {ValidationError, NotFoundError} = require("../../utils/errors.js")

console.log('ValidationError importado:', ValidationError);
console.log('Tipo:', typeof ValidationError);

async function createProducts(data){
    const { nome, preco, estoque } = data;

    const produtoExistente = await productRepository.findByName(nome);

    if(produtoExistente) throw new Error ("Já existe um produto com este nome");

    if(!nome || nome.trim() === "" ) throw new Error ("Nome não pode está vazio");

    if(preco < 0) throw new AppError ("Preço não pode ser negativo");

    if(estoque < 0) throw new Error ("Estoque não pode ser negativo");

    return productRepository.create(data);
};

async function getAllProducts(filters){
    const maxLimit = 100;
    const minLimit = 1;
    const minPage = 1;
    const defaultLimit = 20;
    const defaultPage = 1;
    let limit = filters.limit;
    
    if(limit === undefined){
        limit = defaultLimit;
    } else {
        limit = Number(limit);
        
        if (Number.isNaN(limit)) {
            throw new ValidationError ("Limit tem que ser numero");
        }

        if(limit < minLimit) {
            limit = minLimit;
        }
        
        if (limit > maxLimit){
            limit = maxLimit;
        }
    }

    let page = filters.page;

    if(page === undefined){
        page = defaultPage;
    } else {
        page = Number(page);

        if (Number.isNaN(page)) {
            const error = new Error ("Page tem que ser numero");
            error.name = "ValidationError";
            throw error;
        }

        if(page < minPage){
            page = minPage
        }
    }
    
    return productRepository.findAll({
        ...filters,
        limit
    });
}

async function getProductsId(id){
    console.log("🔍 2. ID chegando no Service:", id);
    const produto = await productRepository.findById(id);

    if(!produto) throw new Error("Produto não encontrado");

    return produto;
}

module.exports = {
    createProducts,
    getAllProducts,
    getProductsId
};
