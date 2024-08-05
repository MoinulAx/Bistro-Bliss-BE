const db = require("../db/dbConfig")

const getAllProducts = async () => {
    try {
        const allProducts = await db.any('SELECT * FROM products')
        return allProducts
    } catch (error) {
        return error
    }
}

const getOneProduct = async (id) => {
    try {
        const oneProduct = await db.one('SELECT * FROM products WHERE product_id=$1', id)
        return oneProduct
    } catch (error) {
        return error
    }
}

const createProduct = async (product) => {
    const { product_name, product_price, product_quantity, product_details, product_image, inStock } = product
    try {
        const createdProduct = await db.one("INSERT INTO products (product_name, product_price, product_quantity, product_details, product_image, inStock) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * ", [product_name, product_price, product_quantity, product_details, product_image, inStock])
        return createdProduct
    } catch (error) {
        return error
    }
}

const updateProduct = async (id, product) => {
    const { product_name, product_price, product_quantity, product_details, product_image, inStock } = product

    try {
        const updatedProducts = await db.one('UPDATE products SET product_name=$1, product_price=$2, product_quantity=$3, product_details=$4, product_image=$5, instock=$6 WHERE product_id=$7 RETURNING *', [product_name, product_price, product_quantity, product_details, product_image, inStock, id])
        return updatedProducts
    } catch (error) {
        return error
    }
}

const deleteProduct = async (id) => {
try {
    const deletedProduct = await db.one("DELETE FROM products WHERE product_id=$1 RETURNING *", id)
    return deletedProduct
} catch (error) {
    console.log(error);
    return error
}
}

module.exports = { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct }