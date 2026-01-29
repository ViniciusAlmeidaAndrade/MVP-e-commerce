const express = require("express");
const {validateProduct, validateId} = require("../middleware/validateProduct");
const productRepository = require("..\repositories\productRepository");
const { findAll } = require("../repositories/productRepository");

const router = express.Router();


router.get("/products", findAll,(req, res) => {
    
    const { available } = req.query;

    if(available === "true"){
        findAll()
    }
    // if(available === "true"){
    //     resultado = produtos
    //     .filter(p => p.estoque > 0)
    //     .map(p => ({
    //                 id: p.id,
    //                 nome: p.nome,
    //                 preco: p.preco,
    //                 estoque: p.estoque
    //     }));
    // }
    
    res.status(200).json(resultado);
});

router.get("/products/:id",validateId, (req, res) => {
    const id = req.productId;

    // const produto = produtos.find(p => p.id === id);

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

    
    // res.status(201).json(novoProduto);
    res.status(201).json({
        mensagem: "produto Criado", 
        novoProduto
    });
});

module.exports = router;
