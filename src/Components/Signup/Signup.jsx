// App.js
import React from "react";
import styles from './Signup.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import signupImg from '../../assets/easy-help.png'
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FiArrowLeftCircle } from "react-icons/fi";

const Signup = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.CardContainer}>
                <Row>
                    <Col md={6}>
                        <Link to='/'>
                            <FiArrowLeftCircle className={styles.backArrowIcon} />
                        </Link>
                        <h3>Sign up</h3>
                        <p>
                            Already have an account?
                            <Link to="/login">Login here</Link>
                        </p>
                        <Form>
                            <Form.Group controlId="formName" className="mb-3 ">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-3 ">
                                <Form.Label>Email ID</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3 ">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" />
                            </Form.Group>

                            <Form.Group controlId="formCheckbox" className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    label="By signing up you agree to receive updates and special offers."
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" style={{ width: "100%" }}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6} className="d-none d-md-block">
                        <div className={styles.imageDiv}>
                            <img
                                src={signupImg} // Replace with your desired image URL
                                alt="Signup illustration"
                                style={{ maxWidth: "100%", maxHeight: "300px" }}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Signup;
