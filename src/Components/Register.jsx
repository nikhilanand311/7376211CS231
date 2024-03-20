import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

import registerImg from '../assets/login.jpg';
import userIcon from '../assets/user.jpg';

const Register = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        userName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here using the 'credentials' state
        // For example, you can send an API request to validate the user's credentials
        navigate('/dashboard'); // Navigate to the dashboard page after successful login
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className="m-auto">

                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={registerImg} alt="" />
                            </div>

                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>
                                <h2>Register</h2>

                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <input type="text" placeholder="username" required id="username"
                                            value={credentials.userName} onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="email" placeholder="Email" required id="email"
                                            value={credentials.email} onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="password" placeholder="Password" required id="password"
                                            value={credentials.password} onChange={handleChange} />
                                    </FormGroup>
                                    <Link to='/home'><Button className="btn secondary__btn auth__btn"
                                        type="submit"
                                    > Create Account
                                    </Button> </Link>
                                </Form>
                                <p>Already have an account? <Link to='/login'>Login</Link></p> {/* Corrected the 'to' prop value */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Register;
