const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const nikeShoesRouter = require("./routes/nikeShoesRoute");
const AdidasShoesRouter = require("./routes/adidasShoesRoute");
const pumaShoesRouter = require("./routes/pumaShoesRoute")

db();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/nike-shoes", nikeShoesRouter);
app.use("/api/adidas-shoes", AdidasShoesRouter);
app.use("/api/puma-shoes",  pumaShoesRouter);

module.exports = app;