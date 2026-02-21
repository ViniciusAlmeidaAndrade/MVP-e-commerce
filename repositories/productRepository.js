let products = [
    {id: 1, nome: "Camisa", preco: 200, estoque: 70 },
    { id: 2, nome: "Calça", preco: 200, estoque: 0 },
    { id: 3, nome: "short", preco: 130, estoque: 20 }
];

function create(data){
    const { nome, preco, estoque } = data; 
    const novoProduto = {
        id: products.length + 1,
        nome,
        preco,
        estoque
    };

    products.push(novoProduto);
    return novoProduto;

};

function applyFilter(resultado, filters){
    
    if (filters.nome) {
        resultado = resultado.filter(p => 
            p.nome.toLowerCase().includes(filters.nome.toLowerCase())
        );
    };
    
    if (filters.estoque === "true") {
        resultado = resultado.filter(p => p.estoque > 0);
    };

    if (filters.minpreco) {
        resultado = resultado.filter(p => p.preco >= Number(filters.minpreco)
        );
    };

    if (filters.maxpreco) {
        resultado = resultado.filter(p => p.preco <= Number(filters.maxpreco)
        );
    };

    if (filters.sort === "preco") {
        if (filters.order === "asc" || filters.order != "asc" || filters.order != "desc") {
            resultado.sort((a, b) => a.preco - b.preco);
        };
    
        if (filters.order === "desc") {
            resultado.sort((a, b) => b.preco - a.preco);
        };
    };

    return resultado
};

function applySort(resultado, filters){
    
    if (filters.sort === "preco") {
        if (filters.order === "asc" || filters.order != "asc" || filters.order != "desc") {
            resultado.sort((a, b) => a.preco - b.preco);
        };
    
        if (filters.order === "desc") {
            resultado.sort((a, b) => b.preco - a.preco);
        };
    };

    return resultado
}

function applyPagination(resultado, page, limit){
    const offset = (page -1) * limit;

    return resultado.slice(offset, offset + limit);
}

function findAll (filters ={}){
    let resultado = products;
    
    resultado = applyFilter(resultado, filters);
    resultado = applySort(resultado, filters);
    
    const total = resultado.length;

    const page = Number(filters.page) || 1;
    const limit = Number(filters.limit) || 10;
    
    resultado = applyPagination(resultado, page, limit);

    const totalPages = Math.ceil(total / limit);
    
    return {
        data: resultado,
        page,
        limit,
        total,
        totalPages
    };
};

function findById(id){
    console.log('3. ID no repository:', id);
    return products.find(p => p.id === id);
};


module.exports = {
    create,
    applyFilter,
    applySort,
    applyPagination,
    findAll,
    findById
};
