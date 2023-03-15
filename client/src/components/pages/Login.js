import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import '../../styles/style.css';

import Auth from '../../utils/auth'

export default function LoginForm() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <body className="login-background app-container" style={{ fontFamily: "'Press Start 2P', cursive" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <h1 className="text-center fade-in-out mb-4" style={{ color: "white" }}>Enter Your Ship Here</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label style={{ color: "white", fontFamily: "'Press Start 2P', cursive" }}>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username or email..."
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  style={{ backgroundColor: "transparent", color: "white", border: "1px solid white", outline: "none", fontFamily: "'Press Start 2P', cursive" }}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label style={{ color: "white", fontFamily: "'Press Start 2P', cursive" }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                  style={{ backgroundColor: "transparent", color: "white", border: "1px solid white", outline: "none", fontFamily: "'Press Start 2P', cursive" }}
                />
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center">
                <Button variant="primary" type="submit" style={{ backgroundColor: "transparent", color: "white", border: "1px solid white", fontFamily: "'Press Start 2P', cursive" }}>
                  Login
                </Button>
                
              </div>
            </Form>
          </div>
        </div>
      </div>
    </body>
  );
}
