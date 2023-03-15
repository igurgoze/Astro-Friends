import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../styles/style.css';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

export default function RegisterForm() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    // Send registration data to server or perform other actions here
  };

  return (
    <div className='register-background' style={{color: 'white', fontFamily: "'Press Start 2P', cursive"}}>
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1 className="mb-4 fade-in-out">Create Your Ship Here</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label style={{ color: "white", fontFamily: "'Press Start 2P', cursive" }} >Username</Form.Label>
          <Form.Control
            type="text"
            name = "username"
            placeholder="Enter username"
            value={formState.name}
            onChange={handleChange}
            style={{ backgroundColor: "transparent", color: "white", border: "1px solid white", outline: "none", fontFamily: "'Press Start 2P', cursive" }}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name = "email"
            placeholder="Enter email"
            value={formState.email}
            onChange={handleChange}
            style={{ backgroundColor: "transparent", color: "white", border: "1px solid white", outline: "none", fontFamily: "'Press Start 2P', cursive" }}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label
          style={{ color: "white", fontFamily: "'Press Start 2P', cursive" }}>Password</Form.Label>
          <Form.Control
            type="password"
            name= "password"
            placeholder="Password"
            value={formState.password}
            onChange={handleChange}
            style={{ backgroundColor: "transparent", color: "white", border: "1px solid white", outline: "none", fontFamily: "'Press Start 2P', cursive" }}
          />
        </Form.Group>

        <Button variant="primary" type="submit"style={{ backgroundColor: "transparent", color: "white", border: "1px solid white", outline: "none", fontFamily: "'Press Start 2P', cursive" }}>
          Register
        </Button>
      </Form>
    </div>
    </div>
  );
}
