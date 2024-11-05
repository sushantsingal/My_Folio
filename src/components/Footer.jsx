import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import { MailChimpForm } from "../components/MailChimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
            {/* <MailChimpForm /> */}
            <Col sm={6}>
                <img src={logo} alt="Logo" />
            </Col>
            <Col sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/sushant-singal/"><img src={navIcon1}/></a>
                    <a href="https://www.facebook.com/profile.php?id=100010098828690"><img src={navIcon2}/></a>
                    <a href="https://www.instagram.com/sushant__singal/"><img src={navIcon3}/></a>
                    <a href="https://github.com/sushantsingal"><img src={navIcon4}/></a>
                </div>
                <p>CopyRight 2024. All Right Reserved</p>
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

