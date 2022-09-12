const express = require("express");
const app = express();
const cors = require("cors");
const menShoesRouter = require("./routes/menShoesRoute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/men-shoes", menShoesRouter);

module.exports = app;