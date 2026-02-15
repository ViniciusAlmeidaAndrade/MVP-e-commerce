# Testes Manuais - E-commerce API

## Produtos

### Listar todos
GET http://localhost:8000/products
Resultado esperado: [array com todos os produtos]

### Filtrar disponíveis
GET http://localhost:8000/products?available=true
Resultado esperado: [só produtos com estoque > 0]

### Filtrar por faixa de preço
GET http://localhost:8000/products?minpreco=100&maxpreco=200
Resultado esperado: [produtos entre 100 e 200]

### Buscar por nome
GET http://localhost:8000/products?nome=camisa
Resultado esperado: [produtos com "camisa" no nome]

### Filtros combinados
GET http://localhost:8000/products?estoque=true&minpreco=50&nome=short
Resultado esperado: [produtos que tenha em estoque com o preço minimo de 50 e com "short" no nome]

### Buscar por ID
GET http://localhost:8000/products/1
Resultado esperado: {produto com id 1}

### Criar produto
POST http://localhost:8000/products
Body: {"nome": "Boné", "preco": 45, "estoque": 30}
Resultado esperado: status 201 + produto criado
