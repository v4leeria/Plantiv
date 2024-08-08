import React from "react";
import { Container, Card, Alert } from "react-bootstrap";
import { useUser } from "../../context/UserContext/UserContext";
import "./Profile.css";

const Profile = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <Container className="miPerfil">
      <h1>Mi Perfil</h1>
      {!user ? (
        <Alert variant="danger">
          Error al obtener la información del perfil.
        </Alert>
      ) : (
        <Card className="cardProfile">
          <h3>
            {user.name || "No disponible"} {user.lastname || "No disponible"}
          </h3>
          <Card.Body className="cardProfileFlex">
            <div className="imagenForm">
              {user.image_url ? (
                <img
                  src={user.image_url}
                  alt="Imagen de perfil"
                  className="imgProfile"
                />
              ) : (
                <div className="imgProfile">Sin imagen</div>
              )}
            </div>

            <div className="cardProfileContent">
              <Card.Text>
                <strong>Email:</strong> {user.email || "No disponible"}
              </Card.Text>
              <Card.Text>
                <strong>Teléfono:</strong>{" "}
                {user.phone_number || "No disponible"}
              </Card.Text>
              <Card.Text>
                <strong>Comuna:</strong> {user.comuna || "No disponible"}
              </Card.Text>
              <Card.Text>
                <strong>Región:</strong> {user.region || "No disponible"}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Profile;
