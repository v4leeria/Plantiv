/*const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  listProducts,
  getProduct,
  getCart,
  addItemToCart,
  removeItemFromCart,
  publishProduct,
  getUserProducts,
} = require("../controllers/storeController");

// Rutas para productos
router.get("/products", listProducts);
router.get("/products/:id", getProduct);

// Rutas para el carrito
router.get("/cart", authMiddleware, getCart);
router.post("/cart", authMiddleware, addItemToCart);
router.delete("/cart/:productId", authMiddleware, removeItemFromCart);

// Ruta para publicar productos
router.post("/products", authMiddleware, publishProduct);
router.get("/myplants", authMiddleware, getUserProducts);

module.exports = router;*/

const express = require("express");
const { authenticateToken } = require("../middlewares/authMiddleware");
const {
  listProducts,
  getProduct,
  getCart,
  addItemToCart,
  removeItemFromCart,
  publishProduct,
} = require("../controllers/storeController");

const router = express.Router();

router.get("/products", listProducts);
router.get("/products/:id", getProduct);
router.get("/cart", authenticateToken, getCart);
router.post("/cart", authenticateToken, addItemToCart);
router.delete("/cart/:productId", authenticateToken, removeItemFromCart);
router.post("/products", authenticateToken, publishProduct);

module.exports = router;
