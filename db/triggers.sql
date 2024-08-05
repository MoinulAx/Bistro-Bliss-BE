\c bistrobliss_dev

CREATE OR REPLACE FUNCTION create_cart_for_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO cart (cart_owner) VALUES (NEW.user_id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER create_cart_after_user_insert
AFTER INSERT ON users
FOR EACH ROW EXECUTE FUNCTION create_cart_for_new_user();