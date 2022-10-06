const express = require('express')
const app = express()
const jsonFile = require("./json/rocks.json");

var bob = 123;
if (jsonFile[bob] === undefined ){
  console.log("hi")
}
else{
  console.log(jsonFile[bob].name);
}
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', "ejs")
const productRouter = require('./product')

app.use('/product', productRouter)


app.listen(3000) 