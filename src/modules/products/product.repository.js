let products = [
    {id: 1, nome: "Camisa", preco: 200, estoque: 70 },
    { id: 2, nome: "Calça", preco: 200, estoque: 0 },
    { id: 3, nome: "short", preco: 130, estoque: 20 }
];

async function create(data){
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

async function findByName(nome){
    return produtos.find(
        p => p.nome.toLowerCase() === nome.toLowerCase()
    );
}

async function applyFilter(resultado, filters){
    
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

async function applySort(resultado, filters){
    
    if (filters.sort !== "preco" && filters.sort !== "nome") {
        return resultado
    };

    const order = filters.order === "desc" ? "desc" : "asc";
    
    return resultado.sort((a,b) => {
        if (a.preco !== b.preco){
            return order === "asc" ? a.preco - b.preco : b.preco - a.preco;
        } else if(a.nome !== b.nome){
            return order === "asc" ? a.nome.localeCompare(b.nome) : b.nome.localeCompare(a.nome);
        }

        return a.id - b.id;
    })
};

async function applyPagination(resultado, page, limit){
    const offset = (page -1) * limit;

    return resultado.slice(offset, offset + limit);
}

async function findAll (filters ={}){
    let resultado = products;
    
    resultado = await applyFilter(resultado, filters);
    resultado = await applySort(resultado, filters);
    
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

async function findById(id){
    return products.find(p => p.id === id);
};


module.exports = {
    create,
    findByName,
    applyFilter,
    applySort,
    applyPagination,
    findAll,
    findById
};
