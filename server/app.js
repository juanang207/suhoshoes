const express = require("express");
const app = express();
const cors = require("cors");
const nikeShoesRouter = require("./routes/nikeShoesRoute");
const AdidasShoesRouter = require("./routes/adidasShoesRoute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/nike-shoes", nikeShoesRouter);
app.use("/api/adidas-shoes", AdidasShoesRouter);

module.exports = app;