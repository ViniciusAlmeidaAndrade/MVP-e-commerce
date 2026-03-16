const {AppError} = require("../utils/errors")

function errorHandler(error, req, res, next) {
    console.log('Erro capturado:', error.message);

    console.log('Tipo do erro:', error.constructor.name);
    
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            error: error.message
        });
    }
    
    console.error('🚨 ERRO NÃO TRATADO:', error);
    
    return res.status(500).json({
        error: 'Erro interno do servidor'
    });
}

module.exports = errorHandler