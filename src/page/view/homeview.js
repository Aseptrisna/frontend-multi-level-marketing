import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import {
  MemberCreateView,
  MemberView,
  CountBonusView,
  MemberMigrateView,
} from "../component";

export default class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false,
    };
  }
  Logout() {
    this.setState({ redirectToReferrer:true });
    localStorage.clear()
  }
  render() {
    if (this.state.redirectToReferrer) {
      return <Navigate to={"/"} />;
    }
    return (
      <div>
        <button
          className="button-class-proses"
          variant="succes"
          variant="info"
          onClick={(e) => this.Logout()}
        >
          Logout
        </button>
        <br />
        <h5>Simple Multi Level Marketing -Admin Panel</h5>
        <Container>
          <Row>
            <MemberCreateView />
            <br />
            <CountBonusView />
            <br />
            <MemberMigrateView />
            <br />
            <MemberView />
            <br />
          </Row>
        </Container>
      </div>
    );
  }
}
