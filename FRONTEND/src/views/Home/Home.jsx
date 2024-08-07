import React from "react";
import { ButtonGeneral } from "../../components/Buttons/ButtonGeneral";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import UncontrolledExample from "../../components/Carrusel/Carousel";

const Home = () => {
  const navigate = useNavigate();

  const handleViewProducts = () => {
    navigate("/products");
  };

  return (
    <div className="home">
      <div className="homeImg">
        <h1>¡Bienvenido al mundo de las plantas!</h1>
      </div>
      <br />
      <UncontrolledExample />
      <br />
      <ButtonGeneral desc="Ver productos" onClick={handleViewProducts} />
    </div>
  );
};

export default Home;
