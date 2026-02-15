let produtos = [
    {id: 1, nome: "Camisa", preco: 80, estoque: 70 },
    { id: 2, nome: "Calça", preco: 200, estoque: 0 },
    { id: 3, nome: "short", preco: 130, estoque: 20 }
];

function createProduct(data){
    const { nome, preco, estoque } = data; 
    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco,
        estoque
    };

    produtos.push(novoProduto);
    return novoProduto;

};

function findAll(filtros = {}){
    let resultado = produtos
    
    if (filtros.nome) {
        resultado = resultado.filter(p => 
            p.nome.toLowerCase().includes(filtros.nome.toLowerCase())
        );
    };
    
    if (filtros.estoque === "true") {
        resultado = resultado.filter(p => p.estoque > 0);
    };

    if (filtros.minpreco) {
        resultado = resultado.filter(p => p.preco >= Number(filtros.minpreco)
        );
    };

    if (filtros.maxpreco) {
        resultado = resultado.filter(p => p.preco <= Number(filtros.maxpreco)
        );
    };

    return resultado;
};

function findById(id_recebido){
    console.log('3. ID no repository:', id_recebido);
    return produtos.find(p => p.id === id_recebido);
};


module.exports = {
    createProduct,
    findAll,
    findById
}
