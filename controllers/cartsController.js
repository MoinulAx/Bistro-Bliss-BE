const express = require("express")
const carts = express.Router()
const { getAllCarts, getOneCart, createCart, updateCart, deleteCart } = require("../queries/carts")

carts.get("/", async (req, res) => {
    const allCarts = await getAllCarts()
    if(allCarts[0]){
        res.status(200).json(allCarts)
    }else {
        res.status(500).json({ error: "Internal Server Error"})
    }
})

carts.get("/:id", async (req, res) => {
    const { id } = req.params
    const oneCart = await getOneCart(id)
    if(oneCart){
        res.status(200).json(oneCart)
    }else {
        res.status(500).json({ error: "Internal Server Error"})
    }
})

carts.post("/", async (req, res) => {
    const createdCart = await createCart(req.body)
    res.status(201).json(createdCart)
})

carts.put("/:id", async (req, res) => {
    const { id } = req.params
    const updatedCart = await updateCart(id, req.body)
    if(updatedCart.cart_id){
        res.status(200).json(updatedCart)
    }else {
        res.status(500).json({ error: "Internal Server Error"})
    }
})

carts.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deletedCart = await deleteCart(id)
    res.status(200).json(deletedCart)
})

module.exports = carts;