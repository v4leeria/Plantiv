import React from "react";
import { useCart } from "../../context/CartContext/CartContext";
import { ListGroup, Button, Image } from "react-bootstrap";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce((total, item) => {
    return total + parseFloat(item.price) * item.quantity;
  }, 0);

  const formatPrice = (price) => parseFloat(price).toFixed(0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Carrito de Compras</h1>
      <ListGroup className="cart-list">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ListGroup.Item key={item.id} className="cart-item">
              <div className="d-flex align-items-center">
                <Image src={item.imgplanta} rounded width={50} height={50} />
                <div className="cart-item-details">
                  <h5>{item.name}</h5>
                  <p>Precio: ${formatPrice(item.price)}</p>
                  <p>Cantidad: {item.quantity}</p>
                </div>
              </div>
              <Button
                variant="danger"
                onClick={() => removeFromCart(item.product_id)}
                className="btn ms-auto"
              >
                Eliminar
              </Button>
            </ListGroup.Item>
          ))
        ) : (
          <p>No hay items en el carrito.</p>
        )}
      </ListGroup>
      {cartItems.length > 0 && (
        <div className="cart-total">
          <h4>Total: ${formatPrice(totalAmount)}</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
