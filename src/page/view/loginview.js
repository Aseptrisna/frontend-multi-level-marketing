import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Logo from "../component/assets/icon.png";
import "../component/css/page.css";

export default class LoginView extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header1">
          <img src={Logo} className="App-logo1" alt="logo" />
          <br />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <button variant="success" className="button-class-proses">Login</button>
        </header>
      </div>
    );
  }
}
