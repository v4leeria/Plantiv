import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext/UserContext";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    comuna: "",
    region: "",
    phone_number: "",
    image_url: "",
  });
  const [error, setError] = useState("");
  const { register } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      navigate("/login");
    } catch (error) {
      console.error("Error registering", error);
      setError("Error al registrarse. Verifica los datos ingresados.");
    }
  };

  return (
    <div className="ContainerRegister">
      <h4 className="text-center tituloRegister">Registro</h4>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit} className="formRegister">
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
            required
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Ingresa tu apellido"
            required
          />
        </Form.Group>
        <Form.Group controlId="formComuna">
          <Form.Label>Comuna</Form.Label>
          <Form.Control
            type="text"
            name="comuna"
            value={form.comuna}
            onChange={handleChange}
            placeholder="Ingresa tu comuna"
            required
          />
        </Form.Group>
        <Form.Group controlId="formRegion">
          <Form.Label>Región</Form.Label>
          <Form.Control
            type="text"
            name="region"
            value={form.region}
            onChange={handleChange}
            placeholder="Ingresa tu región"
            required
          />
        </Form.Group>
        <Form.Group controlId="formTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            name="phone_number"
            value={form.phone_number}
            onChange={handleChange}
            placeholder="Ingresa tu teléfono"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Ingresa tu email"
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña"
            required
          />
        </Form.Group>
        <Form.Group controlId="formImageUrl">
          <Form.Label>URL de la Imagen</Form.Label>
          <Form.Control
            type="text"
            name="image_url"
            value={form.image_url}
            onChange={handleChange}
            placeholder="Ingresa la URL de tu imagen"
          />
        </Form.Group>

        <Button variant="success" type="submit" className="mt-3 buttonRegister">
          Registrarse
        </Button>
      </Form>
    </div>
  );
};

export default Register;
