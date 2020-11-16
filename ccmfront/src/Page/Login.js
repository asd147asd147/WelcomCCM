import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Login extends Component {
    render() {
        return(
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="id" placeholder="Enter ID" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default Login;