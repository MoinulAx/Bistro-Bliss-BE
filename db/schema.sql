DROP DATABASE IF EXISTS bistrobliss_dev;

CREATE DATABASE bistrobliss_dev;

\c bistrobliss_dev

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name TEXT NOT NULL,
    product_price DECIMAL(10, 2) NOT NULL,
    product_quantity INT NOT NULL,
    product_details TEXT NOT NULL,
    product_imageURL TEXT
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_full_name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    user_address TEXT NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cart (
    cart_id SERIAL PRIMARY KEY,
    cart_owner INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE cart_products (
    cart_product_id SERIAL PRIMARY KEY,
    carts_id INT NOT NULL REFERENCES cart(cart_id) ON DELETE CASCADE,
    products_id INT NOT NULL REFERENCES products(product_id) ON DELETE CASCADE,
    products_quantity INT NOT NULL
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    order_user INT REFERENCES users(user_id) ON DELETE SET NULL,
    order_cart INT REFERENCES cart(cart_id) ON DELETE SET NULL
);
