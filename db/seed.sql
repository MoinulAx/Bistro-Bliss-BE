\c bistrobliss_dev

INSERT INTO products (product_name, product_price, product_quantity, product_details) VALUES 
('Coffee', 4, 20, 'A hot drink made from roasted coffee beans'),
('Bagel', 1, 20, 'A dense bread roll in the shape of a ring'),
('Butter Roll', 1, 10, 'A roll with butter baked in'),
('Chocolate Candy', 1, 10, 'Sweet confection made with chocolate'),
('Croissant', 1, 15, 'A buttery, flaky, and crescent-shaped pastry'),
('Bread', 1, 10, 'A staple food made from flour and water'),
('Chocolate Chip Cookie', 1, 10, 'A cookie with chocolate chips'),
('Root Beer', 1, 10, 'A sweet soda made with sassafras root'),
('Orange Juice', 2, 10, 'Juice made from fresh oranges'),
('Bottle of Water', 2.50, 15, 'A bottle of mineral water');

INSERT INTO users (user_full_name, email, user_address, password_hash) VALUES
  ('Owner', 'Owner@example.com', '123 Main St', 'password123'),
  ('Jane Smith', 'jane@example.com', '456 Elm St', 'letmein2024'),
  ('Alex Wong', 'alex@example.com', '789 Oak St', 'securepassword'),
  ('Sara Jones', 'sara@example.com', '101 Pine St', 'p@ssw0rd');



-- Insert dummy data into cart_products
INSERT INTO cart_products (carts_id, products_id, products_quantity) VALUES
(1, 1, 2),  -- 2 Coffee in John Doe's cart
(1, 2, 1),  -- 1 Bagel in John Doe's cart
(2, 3, 3),  -- 3 Butter Roll in Jane Smith's cart
(2, 4, 5),  -- 5 Chocolate Candy in Jane Smith's cart
(3, 5, 2),  -- 2 Croissant in Alex Wong's cart
(3, 6, 1),  -- 1 Bread in Alex Wong's cart
(4, 7, 4),  -- 4 Chocolate Chip Cookie in Sara Jones's cart
(4, 8, 2);  -- 2 Root Beer in Sara Jones's cart

-- Insert dummy data into orders
INSERT INTO orders (order_user, order_cart) VALUES
(1, 1),  -- John Doe's order for his cart
(2, 2),  -- Jane Smith's order for her cart
(3, 3),  -- Alex Wong's order for his cart
(4, 4);  -- Sara Jones's order for her cart