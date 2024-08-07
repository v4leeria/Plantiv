import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import axios from "../../config/axiosInstance";
import { useUser } from "../../context/UserContext/UserContext";
import { useCart } from "../../context/CartContext/CartContext";
import "./ProductDetails.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const { user } = useUser();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/store/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error al obtener el producto.", error);
        setError("Error al obtener el producto.");
      }
    };

    fetchProduct();
  }, [id]);

  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!product) return <p>Cargando...</p>;

  const handleAddToCart = () => {
    if (user) {
      addToCart(product.id, 1);
      alert("Producto agregado al carrito.");
    } else {
      alert("Necesitas iniciar sesión para agregar al carrito.");
    }
  };

  return (
    <Container>
      <h1 className="text-center mb-4">Detalles del Producto</h1>
      <Row>
        <Col md={6} className="mb-4">
          <Card.Img
            variant="top"
            src={product.imgplanta}
            className="product-image border"
          />
        </Col>
        <Col md={6}>
          <Card className="card-border">
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Precio: ${product.price}</Card.Text>
              <Card.Text>Stock: {product.stock}</Card.Text>
              <Button variant="primary" onClick={handleAddToCart}>
                Agregar al Carrito
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
