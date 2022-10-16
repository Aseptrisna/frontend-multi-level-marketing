import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Logo from "../component/assets/icon.png";
import "../component/css/page.css";
import Services from "../service/services";
import AlertComponent from "../component/alert/alert";
import { Navigate } from "react-router-dom";

export default class LoginView extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectToReferrer: false,
    };
    this.OnLogin = this.OnLogin.bind(this);
    this.Validasi = this.Validasi.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  Validasi() {
    if (this.state.email === "") {
      AlertComponent.Error("Email Harus Di isi !");
    } else if (this.state.password === "") {
      AlertComponent.Error("Password Harus Di isi !");
    } else {
      this.OnLogin();
    }
  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  OnLogin() {
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    Services.Login(data)
      .then((res) => {
        if (res.data.status) {
          AlertComponent.Succes(res.data.message);
          this.setState({ redirectToReferrer: true });
          localStorage.setItem("Token", res.data.token);
          // window.location.reload(false);
        } else {
          AlertComponent.Succes(res.data.message);
        }
      })
      .catch((err) => {
        AlertComponent.Error("Email dan Password Salah !");
      });
  }
  render() {
    if (this.state.redirectToReferrer) {
      return <Navigate to={"/home"} />;
    }
    return (
      <div className="App">
        <header className="App-header1">
          <img src={Logo} className="App-logo1" alt="logo" />
          <br />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="Email"
              type="email"
              placeholder="Aseptrisna1995@gmail.com"
              required
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="password"
              placeholder="Password"
              type="password"
              placeholder=""
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <button variant="success" className="button-class-proses"  onClick={(e) => this.Validasi()}>
            Login
          </button>
        </header>
      </div>
    );
  }
}
