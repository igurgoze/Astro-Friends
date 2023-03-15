import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../styles/style.css';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
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
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  style={{ backgroundColor: "transparent", color: "white", border: "1px solid white", outline: "none", fontFamily: "'Press Start 2P', cursive" }}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label style={{ color: "white", fontFamily: "'Press Start 2P', cursive" }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
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
