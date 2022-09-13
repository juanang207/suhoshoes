const router = require("express").Router();
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();


const adidasShoesJSON = []
sneaks.getProducts("adidas", 10, async function(err,products){
  console.log(products)
  if (!err){
  for(let i = 0 ; i<products.length; i++){
    adidasShoesJSON.push(
    {
      "id": products[i]._id,
      "name": products[i].shoeName,
      "price": products[i].retailPrice,
      "image": products[i].thumbnail,
      "sizes": [
        { "size": 7, "selected": false },
        { "size": 7.5, "selected": false },
        { "size": 8, "selected": false },
        { "size": 8.5, "selected": false },
        { "size": 9, "selected": false },
        { "size": 9.5, "selected": false },
        { "size": 10, "selected": false }
      ]
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