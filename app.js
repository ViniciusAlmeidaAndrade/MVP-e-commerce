const express = require("express");
const app = express();

const healthRouters = require("./routes/health.routes.js");

const productsRoutes = require("./routes/products.routes");

app.use(express.json());

app.use(healthRouters);
app.use(productsRoutes);

app.listen(8000, function(){
    console.log("Example app listening on port 8000!")
});

