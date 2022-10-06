
const express = require('express')
const router = express.Router()
router.get('/', (reg,res) => {
    res.send("product list")
})
router.get('/new', (reg,res) => {
    
    res.render("products/new", { firstName: "Test"})

})

router.post('/', (req,res) => {
    const isValid = true 
    if (isValid){
        products.push({ firstName:req.body.firstName})
        res.redirect(`/products/${products.length - 1}`)
    } else{
        console.log("error")
        res.render('products/new', { firstName:req.body.firstName})
    }
}) 

router
    .route('/:id')
    .get((req, res) => {
        console.log(req.product)
        res.send(`product get with id ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`update product with id ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`dlete product with id ${req.params.id}`)
    })

const products = [{name:"Kyle"}, { name: "Sally"}]
router.param("id", (req, res, next, id) =>{
    req.product = products[id]
    if (products.length < id){
        res.send("bozo")

    }
    next()
})

module.exports = router