const db = require("../db/dbConfig")

const getAllCartProducts = async () => {
    try {
        const allCartProducts = await db.any("SELECT * FROM cart_products")
        return allCartProducts
    } catch (error) {
        return error
    }
}

const getOneCartsProducts = async (id) => {
    try {
        const oneCartProduct = await db.any("SELECT * FROM cart_products WHERE carts_id=$1", id)
        return oneCartProduct
    } catch (error) {
        return error
    }
}

const createCartProduct = async (cartProduct) => {
    const { carts_id, products_id, products_quantity } = cartProduct
    try {
        const createdCartProduct = await db.one("INSERT INTO cart_products (carts_id, products_id, products_quantity) VALUES($1, $2, $3) RETURNING *", [carts_id, products_id, products_quantity])
        return createdCartProduct
    } catch (error) {
        return error
    }
}

const updateCartProduct = async (id, cartProduct) => {
    const { carts_id, products_id, products_quantity } = cartProduct
    try {
        const updatedCartProduct = await db.one("UPDATE cart_products SET carts_id=$1, products_id=$2, products_quantity=$3 WHERE cart_product_id=$4 RETURNING *", [carts_id, products_id, products_quantity, id])
        return updatedCartProduct
    } catch (error) {
        return error
    }
}

const deleteCartProduct = async (id) => {
    try {
        const deletedCartProduct = await db.one("DELETE FROM cart_products WHERE cart_product_id=$1 RETURNING *", id)
        return deletedCartProduct
    } catch (error) {
        return error
    }
}

module.exports = { getAllCartProducts, getOneCartsProducts, createCartProduct, updateCartProduct, deleteCartProduct }