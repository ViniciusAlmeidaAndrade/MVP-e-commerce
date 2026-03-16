const express = require("express");
const productsRoutes = require("./routes/products.routes");

const router = express.Router();

app.use(express.json());
app.use("/products", productsRoutes);

module.exports = router