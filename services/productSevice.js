const productRepository = require ("../repositories/productRepository.js");

function createProduct(data){
    const { nome, preco, estoque } = data;

    const produtos = productRepository.findAll({ limit: 999999999 })

    const produtoExistente = produtos.find(
        p => p.nome.toLowerCase() === nome.toLowerCase()
    );

    if(produtoExistente) throw new Error ("Já existe um produto com este nome");

    if(!nome || nome.trim() === "" ) throw new Error ("Nome não pode está vazio");

    if(preco < 0) throw new Error ("Preço não pode ser negativo");

    if(estoque < 0) throw new Error ("Estoque não pode ser negativo");

    return productRepository.create(data);
};

function getProductsAll(filters){
    const maxlimit = 100
    const minlimit = 1
    let limit = Number(filters.limit)
    
    if(limit < minlimit) throw new Error ("Paginação não pode ser negativo");

    if (limit > maxlimit){
        limit = maxlimit
        console.log("Limite por pagina é 100")
    }

    return productRepository.findAll({
        ...filters,
        limit
    });
};

function getProductsId(id){
    console.log("2. ID no service:", id);
    return productRepository.findById(id);
}

module.exports = {
    createProduct,
    getProductsAll,
    getProductsId
};
