
import React from 'react';
import './Footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg";

const quick__links = [
    {
        path: '/home',
        display: 'Home',
    },
    {
        path: '/home',
        display: 'About',
    },
    {
        path: '/tours',
        display: 'Tours'
    },

]

const quick__links2 = [
    {
        path: '/home',
        display: 'Gallery',
    },
    {
        path: '/login',
        display: 'Login',
    },
    {
        path: '/register',
        display: 'Register'
    },

]
const Footer = () => {

    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3">
                        <div className="logo">
                            <img src={logo} alt="" />
                            <p>  you get access to our exclusive offers and discounts, early bird discounts. </p>

                            <div className="social__links d-flex align-items-center gap-4">
                                <span>
                                    <Link to="#"><i className="ri-youtube-line"></i></Link>
                                </span>
                                <span>
                                    <Link to="#"><i className="ri-instagram-line"></i></Link>
                                </span>
                                <span>
                                    <Link to="#"><i className="ri-facebook-circle-line"></i></Link>
                                </span>
                                <span>
                                    <Link to="#"><i className="ri-twitter-line"></i></Link>
                                </span>
                                <span>
                                    <Link to="#"><i className="ri-github-fill"></i></Link>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3">
                        <h5 className="footer__link-title"> Products</h5>
                        <ListGroup className="footer__quick-links">
                            {
                                quick__links.map((item, index) => (
                                    <ListGroupItem key={index}> <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>

                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg="3">

                        <h5 className="footer__link-title"> Quick Links</h5>
                        <ListGroup className="footer__quick-links">
                            {
                                quick__links2.map((item, index) => (
                                    <ListGroupItem key={index}> <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>

                                ))
                            }
                        </ListGroup>

                    </Col>
                    <Col lg="3">

                        <h5 className="footer__link-title"> Contact</h5>
                        <ListGroup className="footer_quick-links">

                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-item-center gap-2">
                                    <span><i className="ri-map-pin-line"></i></span>
                                    Address:
                                </h6>
                                <p className="mb-0"> coimbatore, India </p>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-item-center gap-2">
                                    <span><i className="ri-mail-line"></i></span>
                                    Email:
                                </h6>
                                <p className="mb-0"> nikhilanand.cs21@bitsathy.ac.in</p>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-item-center gap-2">
                                    <span><i className="ri-phone-line"></i></span>
                                    Phone:
                                </h6>
                                <p className="mb-0"> 0+ 123456789 </p>
                            </ListGroupItem>

                        </ListGroup>
                    </Col>
                    <Col lg="12" className="text-center pt-5">
                        <p className="copyright"> Copyright {year}, design and develop by Nikhil anand. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer