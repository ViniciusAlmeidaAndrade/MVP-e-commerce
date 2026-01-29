let produtos = [
    {id: 1, nome: "Camisa", preco: 80, estoque: 70 },
    { id: 2, nome: "Calça", preco: 200, estoque: 50 },
    { id: 3, nome: "short", preco: 130, estoque: 20 }
];

function findAll(){

    let select = produtos.filter(p => p.estoque > 0)
    return select;
};

function findById(id_recebido){
    const select = produtos.find(p => p.id === id_recebido);
    return select;
};

function create(product){
    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco,
        estoque
    };

    produtos.push(novoProduto);

};


module.exports = {
    findAll,
    findById,
    create
}