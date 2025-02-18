import React from 'react'
import logo from "../assets/adTask.ai.png"
import address from "../assets/address.png"
import mail from "../assets/mail.png"
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer pt-5 px-5" style={{borderTop:"1px solid #FFFFFF94",color:"#FFFFFF94"}}>
      <Container>
        <Row className="pt-5 align-items-center justify-content-around text-center text-md-start">
          <Col lg={4} className="mb-4 mb-lg-0 order-2 order-lg-1  "  >
           <img src={logo} alt='' className="mb-4 " style={{width:"350px"}} />
            <p className="mb-3 fs-6" style={{color:"#788199"}} >
              <img src={mail} alt='' /> <small className='text-decoration-underline'> contact@adtask.ai</small>
            </p>
            <p className='fs-6' style={{color:"#788199"}}>
              <img src={address} alt=''/><span><small>San Francisco Bay Area </small></span>
            </p>
          </Col>

          <Col lg={6} className="order-1 order-lg-2">
            <Row>
              <Col xs={6} className="mb-3 text-center ">
                <h5 className="fw-semibold text-white mb-3">Utilities</h5>
                <ul className="list-unstyled ">
                  <li className='mb-3'>Home</li>
                  <li className='mb-3'>Products</li>
                  <li className='mb-3'>Tools</li>
                  <li className='mb-3'>Contact Us</li>
                </ul>
              </Col>
              <Col xs={6} className="mb-3 text-center">
                <h5 className="fw-semibold text-white mb-3">Socials</h5>
                <ul className="list-unstyled">
                  <li className='mb-3'>X</li>
                  <li className='mb-3'>LinkedIn</li>
                  <li className='mb-3'>Instagram</li>
                  <li className='mb-3'>Facebook</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="my-4">
          <Col className="text-center">
            <small className='fw-semibold'>All rights reserved © 2025 adTask. </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
