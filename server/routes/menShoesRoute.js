const router = require("express").Router();

router.get("/", async (req, res) => {
  res.sendFile("men_shoes.json", { root: "./database" });
});

module.exports = router;