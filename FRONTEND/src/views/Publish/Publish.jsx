import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContext/ProductContext";
import "./Publish.css";

const Publish = () => {
  const { addProduct } = useProducts();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    imgplanta: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(product);
      navigate("/products");
    } catch (error) {
      console.error("Error al publicar la planta", error);
      setError("Error al publicar la planta.");
    }
  };

  return (
    <div className="ContainerPublish">
      <h4>Publicar Planta</h4>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit} className="formPublish">
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Nombre de la planta"
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Descripción de la planta"
            required
          />
        </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Precio"
            required
          />
        </Form.Group>
        <Form.Group controlId="formStock">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            placeholder="Stock"
            required
          />
        </Form.Group>
        <Form.Group controlId="formImage">
          <Form.Label>Imagen URL</Form.Label>
          <Form.Control
            type="text"
            name="imgplanta"
            value={product.imgplanta}
            onChange={handleChange}
            placeholder="URL de la imagen"
          />
        </Form.Group>
        <Button variant="success" type="submit" className="mt-3 buttonPublish">
          Publicar
        </Button>
      </Form>
    </div>
  );
};

export default Publish;
