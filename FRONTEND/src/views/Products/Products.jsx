import React from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContext/ProductContext";
import "./Products.css";

const Products = () => {
  const { products } = useProducts();
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <Container>
      <h1 className="text-center mb-4">Productos</h1>
      {products.length === 0 ? (
        <Alert variant="info">No hay productos disponibles.</Alert>
      ) : (
        <Row>
          {products.map((product) => (
            <Col md={3} key={product.id} className="mb-4">
              <Card className="cardProduct">
                <Card.Img
                  variant="top"
                  src={product.imgplanta}
                  className="card-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="card-title">{product.name}</Card.Title>
                  <Card.Text className="card-text">
                    Precio: ${product.price}
                  </Card.Text>
                  <Button
                    variant="success"
                    className="mt-auto"
                    onClick={() => handleViewDetails(product.id)}
                  >
                    Ver Detalles
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Products;
