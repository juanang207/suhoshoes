const router = require("express").Router();
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();


const mensShoesJSON = []
sneaks.getProducts("nike", 10, async function(err,products){
  if (!err){
  for(let i = 0 ; i<products.length; i++){
    mensShoesJSON.push(
    {
      "id": products[i]._id,
      "name": products[i].shoeName,
      "price": products[i].retailPrice,
      "image": products[i].thumbnail
    }
  )
  }
}
})

router.get("/", async (req, res) => {
  
  res.send(mensShoesJSON)
  // res.sendFile("men_shoes.json", { root: "./database" });
  
});

module.exports = router;