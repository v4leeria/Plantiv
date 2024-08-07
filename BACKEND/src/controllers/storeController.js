const {
  getProducts,
  getProductById,
  getCartItems,
  addToCart,
  removeFromCart,
  createProduct,
} = require("../models/storeModel");

const listProducts = async (req, res) => {
  try {
    const products = await getProducts();
    // Redondear el precio en el momento de la respuesta
    const formattedProducts = products.map((product) => ({
      ...product,
      price: Math.round(product.price), // Redondear a número entero
    }));
    res.json(formattedProducts);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};
const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductById(id);
    if (product) {
      // Redondear el precio en el momento de la respuesta
      product.price = Math.round(product.price); // Redondear a número entero
      res.json(product);
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

const getCart = async (req, res) => {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ error: "Usuario no autenticado" });
  }
  const userId = req.user.id;
  try {
    const cartItems = await getCartItems(userId);
    res.status(200).json(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ error: "Error fetching cart items" });
  }
};

const addItemToCart = async (req, res) => {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ error: "Usuario no autenticado" });
  }
  const userId = req.user.id;
  const { productId, quantity } = req.body;

  try {
    await addToCart(userId, productId, quantity);
    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Error adding item to cart" });
  }
};

const removeItemFromCart = async (req, res) => {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ error: "Usuario no autenticado" });
  }
  const userId = req.user.id;
  const { productId } = req.params;
  try {
    await removeFromCart(userId, productId);
    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ error: "Error removing item from cart" });
  }
};

const publishProduct = async (req, res) => {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ error: "Usuario no autenticado" });
  }
  const { name, description, price, stock, imgplanta } = req.body;
  const userId = req.user.id;
  try {
    const newProduct = await createProduct(
      { name, description, price, stock, imgplanta },
      userId
    );
    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Error al publicar el producto:", err);
    res.status(500).json({ error: "Error creando el producto" });
  }
};

module.exports = {
  listProducts,
  getProduct,
  getCart,
  addItemToCart,
  removeItemFromCart,
  publishProduct,
};
