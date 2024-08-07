import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center ">
            <div className="social-icons">
              <FaFacebook className="icon" />

              <FaInstagram className="icon" />

              <FaTwitter className="icon" />
            </div>
            <div className="username">@plantiv</div>
            <div className="year">2024</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
