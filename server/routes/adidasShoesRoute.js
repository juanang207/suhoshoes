const router = require("express").Router();
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();


const adidasShoesJSON = []
sneaks.getProducts("adidas", 10, async function(err,products){
  if (!err){
  for(let i = 0 ; i<products.length; i++){
    adidasShoesJSON.push(
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
        ],
      "silhoutte": products[i].silhoutte,
      "colorway": products[i].colorway,
      "releaseDate": products[i].releaseDate,
    }
  )
  }
}
})

router.get("/", async (req, res) => {
  
  res.send(adidasShoesJSON)
  // res.sendFile("men_shoes.json", { root: "./database" });
  
});

module.exports = router;