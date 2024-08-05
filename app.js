const express = require('express')
const app = express()
const cors = require('cors') 


// Controllers
const productsController = require("./controllers/productsController")
const usersController = require("./controllers/usersController")
const cartsController = require("./controllers/cartsController")
const cartProductsController = require("./controllers/cartProductsController")
const ordersController = require("./controllers/ordersController")

//Middleware
app.use(cors())
app.use(express.json())

//Controller Implementation 
app.use("/products", productsController)
app.use("/users", usersController)
app.use("/carts", cartsController)
app.use("/cart_products", cartProductsController)
app.use("/orders", ordersController)

app.get('/', (req,res) => {
    res.send('Welcome To Bistro-Bliss-Backend')
})

app.get('*' , (req, res) =>{
     res.send("Invalid URL")
})


module.exports = app;