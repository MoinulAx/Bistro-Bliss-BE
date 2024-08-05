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
  ('John Doe', 'john@example.com', '123 Main St', 'password123'),
  ('Jane Smith', 'jane@example.com', '456 Elm St', 'letmein2024'),
  ('Alex Wong', 'alex@example.com', '789 Oak St', 'securepassword'),
  ('Sara Jones', 'sara@example.com', '101 Pine St', 'p@ssw0rd');
