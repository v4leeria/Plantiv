import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

function UncontrolledExample() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../src/assets/Json/img.json");
      const data = await response.json();
      setImages(data);
    };

    fetchData();
  }, []);

  return (
    <Carousel>
      {images.map((img) => (
        <Carousel.Item key={img.id}>
          <img src={img.image} alt={img.caption} className="img" />
          <Carousel.Caption className="textsCarousel">
            <h3>{img.caption}</h3>
            <p>{img.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;
