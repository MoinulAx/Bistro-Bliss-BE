const express = require("express")
const orders = express.Router()
const { getAllOrders, getOneOrder, createOneOrder, updateOrder, deleteOrder } = require("../queries/orders")

orders.get("/", async (req, res) => {
    const allOrders = await getAllOrders()
    if(allOrders){
        res.status(200).json(allOrders)
    }else {
        console.log(allOrders)
        res.status(500).json({ error: "Internal Server Error"})
    }
})

orders.get("/:id", async (req, res) => {
    const { id } = req.params
    const oneOrder = await getOneOrder(id)
    if(oneOrder.order_id){
        res.status(200).json(oneOrder)
    }else {
        res.status(500).json({ error: "Internal Server Error"})
    }
})

orders.post("/", async (req, res) => {
    const newOrder = await createOneOrder(req.body)
    res.status(201).json(newOrder)
})

orders.put("/:id", async (req, res) => {
    const { id } = req.params
    const updatedOrder = await updateOrder(id, req.body)
    res.status(200).json(updatedOrder)
})

orders.delete("/:id", async (req, res) => {
    const { id } = req.params 
    const deletedOrder = await deleteOrder(id)
    res.status(200).json(deletedOrder)
})

module.exports = orders;