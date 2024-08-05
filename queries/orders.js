const db = require("../db/dbConfig")

const getAllOrders = async () => {
    try {
        const allOrders = await db.any("SELECT orders.order_id, orders.order_cart, cart.cart_owner FROM orders JOIN cart ON orders.order_cart = cart.cart_id")
        return allOrders
    } catch (error) {
        return error
    }
}

const getOneOrder = async (id) => {
    try {
        const oneOrder = await db.one("SELECT orders.order_id, orders.order_cart, cart.cart_owner FROM orders JOIN cart ON orders.order_cart = cart.cart_id WHERE order_id=$1", id)
        return oneOrder
    } catch (error) {
        return error
    }
}

const createOneOrder = async (order) => {
    const {order_user, order_cart} = order
    try {
        const newOrder = await db.one("INSERT INTO orders (order_user, order_cart) VALUES ($1, $2) RETURNING *", [order_user, order_cart])
        return newOrder
    } catch (error) {
        return error
    }
}

const updateOrder = async (id, order) => {
    const {order_user, order_cart} = order
    try {
        const updatedOrder = await db.one("UPDATE orders SET order_user=$1, order_cart=$2 WHERE order_id=$3 RETURNING *", [order_user, order_cart, id])
        return updatedOrder
    } catch (error) {
        return error
    } 
}

const deleteOrder = async (id) => {
    try {
        const deletedOrder = await db.one("DELETE FROM orders WHERE order_id=$1 RETURNING *", id)
        return deletedOrder
    } catch (error) {
        return error
    }
}

module.exports = { getAllOrders, getOneOrder, createOneOrder, updateOrder, deleteOrder }