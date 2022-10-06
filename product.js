const express = require('express')
const router = express.Router()
const jsonFile = require("./json/rocks.json");

router.get('/', (reg,res) => {
    res.send("product list")
})
router.get('/new', (reg,res) => {
    


})
router
    .route('/:id')
    .get((req, res) => {
        var bob = req.params.id;
        
        if (jsonFile[bob] === undefined ){
          console.log("hi")
        }
        else{
            res.render("users/new", {text: jsonFile[bob].img, bob: jsonFile[bob].name})

          console.log(jsonFile[bob].name);
        }
    })
    .put((req, res) => {
        res.send(`update product with id ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`dlete product with id ${req.params.id}`)
    })

module.exports = router