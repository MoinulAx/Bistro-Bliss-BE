const express = require("express")
const cartProducts = express.Router()
const { getAllCartProducts, getOneCartsProducts, createCartProduct, updateCartProduct, deleteCartProduct} = require("../queries/cartProducts")
const { any } = require("../db/dbConfig")

cartProducts.get("/", async (req, res) => {
    const allCartProducts = await getAllCartProducts()
    if(allCartProducts[0]){
        res.status(200).json(allCartProducts)
    }else {
        res.status(500).json({ error: "Internal Server Error"})
    }
})

cartProducts.get("/:id", async (req, res) => {
    const { id } = req.params
    const oneCartProduct = await getOneCartsProducts(id)
    if(oneCartProduct){
        res.status(200).json(oneCartProduct)
    }else {
        res.status(500).json({ error: "Internal Server Error"})
    }
})

cartProducts.post("/", async (req, res) => {
    const createdCartProduct = await createCartProduct(req.body)
    res.status(201).json(createdCartProduct)
})

cartProducts.put("/:id", async (req, res) => {
    const { id } = req.params 
    const updatedCartProduct = await updateCartProduct(id, req.body)
    res.status(200).json(updatedCartProduct)
})

cartProducts.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deletedCartProduct = await deleteCartProduct(id)
    res.status(200).json(deletedCartProduct)
})

module.exports = cartProducts