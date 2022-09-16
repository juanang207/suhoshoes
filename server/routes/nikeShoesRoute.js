const router = require("express").Router();
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();


const nikeShoesJSON = []
sneaks.getProducts("nike", 10, async function(err,products){
  console.log(products)
  if (!err){
  for(let i = 0 ; i<products.length; i++){
    nikeShoesJSON.push(
    {
      "id": products[i]._id,
      "name": products[i].shoeName,
      "price": products[i].retailPrice,
      "image": products[i].thumbnail,
      "description": products[i].description,
      "sizes": [
        { "size": 7 },
        { "size": 7.5 },
        { "size": 8 },
        { "size": 8.5 },
        { "size": 9  },
        { "size": 9.5 },
        { "size": 10 }
      ]
    }
  )
  }
}
})

router.get("/", async (req, res) => {
  
  res.send(nikeShoesJSON)
  // res.sendFile("men_shoes.json", { root: "./database" });
  
});

module.exports = router;