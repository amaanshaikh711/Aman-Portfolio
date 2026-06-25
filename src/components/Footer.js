import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { useState } from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center py-4">
          <Col xs={12} sm={4} className="text-center text-sm-start mb-3 mb-sm-0">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>
          <Col xs={12} sm={4} className="text-center mb-3 mb-sm-0">
            {/* <p className="footer-text mb-0">Designed & Built by Aman Shaikh</p> */}
          </Col>
          <Col xs={12} sm={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aman-shaikh-3b4959292/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/amaanshaikh711" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p className="footer-text mb-0 mt-3">Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
