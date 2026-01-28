const express = require("express");
const {validateProduct, validateId} = require("../middleware/validateProduct");


const router = express.Router();


let produtos = [
    {id: 1, nome: "Camisa", preco: 50, estoque: 10 },
    { id: 2, nome: "Calça", preco: 100, estoque: 1 }
];


router.get("/products", (req, res) => {
    
    const { available } = req.query;

    let resultado = produtos;
    
    if(available === "true"){
        resultado = produtos
        .filter(p => p.estoque > 0)
        .map(p => ({
                    id: p.id,
                    nome: p.nome,
                    preco: p.preco,
                    estoque: p.estoque
        }));
    }
    
    res.status(200).json(resultado);
});

router.get("/products/:id",validateId, (req, res) => {
    const id = req.productId;

    const produto = produtos.find(p => p.id === id);

    if(!produto){
        return res.status(404).json({error: "produto não encontrado"});
    };

    res.status(200).json(produto);
}); 

// router.get("/products/testtwo/:id", validateId, (req, res) => {
//     const id_recebido = req.productId;
//     const produto = produtos.filter(p => p.id === id_recebido);
//     if(!produto){
//         return res.status(404).json({error:`produto de id: ${id_recebido} não encontrado`});
//     };
//     res.status(200).json(produto);
// });

router.post("/products", validateProduct, (req, res) => {
    const { nome, preco, estoque } = req.body;

    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco,
        estoque
    };

    produtos.push(novoProduto);

    // res.status(201).json(novoProduto);
    res.status(201).json({
        mensagem: "produto Criado", 
        novoProduto
    });
});

module.exports = router;
