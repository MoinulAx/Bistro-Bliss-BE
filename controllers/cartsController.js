const express = require("express");
const carts = express.Router();
const {
  getAllCarts,
  getOneCart,
  createCart,
  updateCart,
  deleteCart,
} = require("../queries/carts");

carts.get("/", async (req, res) => {
  try {
    const allCarts = await getAllCarts();
    if (allCarts.length > 0) {
      res.status(200).json(allCarts);
    } else {
      res.status(404).json({ error: "No carts found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

carts.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const oneCart = await getOneCart(id);
    if (oneCart) {
      res.status(200).json(oneCart);
    } else {
      res.status(404).json({ error: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

carts.post("/", async (req, res) => {
  try {
    const createdCart = await createCart(req.body);
    res.status(201).json(createdCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

carts.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCart = await updateCart(id, req.body);
    if (updatedCart) {
      res.status(200).json(updatedCart);
    } else {
      res.status(404).json({ error: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

carts.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCart = await deleteCart(id);
    if (deletedCart) {
      res.status(200).json(deletedCart);
    } else {
      res.status(404).json({ error: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = carts;
