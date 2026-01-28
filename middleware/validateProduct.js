function validateProduct(req, res, next){
    const {nome, preco, estoque, id, produtos} = req.body;
    
    if(!nome || typeof nome !== "string"){
        return res.status(400).json({error: "Nome inválido"});
    };

    if(typeof preco !== "number" || preco <= 0){
        return res.status(400).json({error: "preco inválido"});
    };

    if(estoque == null || typeof estoque !== "number" || estoque < 0){
        return res.status(400).json({error: "estoque inválido"});
    };
    next();
};

function validateId(req, res, next){
    const id = Number(req.params.id);

    if(Number.isNaN(id) || id < 1){
        return res.status(400).json({error: "id inválido"});
    };

    req.productId = id;

    next();
};

module.exports = {
    validateProduct,
    validateId
};