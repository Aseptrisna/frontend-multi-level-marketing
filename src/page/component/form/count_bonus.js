import React, { Component } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Button, FormGroup, Label, Input } from "reactstrap";
import Services from "../../service/services";
import AlertComponent from "../alert/alert";
export default class CountBonusView extends Component {
  constructor() {
    super();
    this.state = {
      bonus: "",
      guid_parent: "",
      redirectToReferrer: false,
      parents: [],
    };
    this.OnCreate = this.OnCreate.bind(this);
    this.Validasi = this.Validasi.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    this.getParent();
  }
  getParent() {
    Services.GetPMember().then((res) => {
      const parents = res.data.member;
      this.setState({ parents });
    });
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  Validasi() {
    if (this.state.guid_parent === "") {
      AlertComponent.Error("Kolom Harus Di isi Semua!!!");
    } else {
      this.OnCreate();
    }
  }
  OnCreate() {
    this.setState({ bonus: "$" + this.state.guid_parent });
  }
  render() {
    return (
      <div>
        <h6>Perhitungan Bonus</h6>
        <Container>
          <Row>
            <Col>
              <div className="form-group">
                {/* <label>Parent</label> */}
                <select
                  className="form-control"
                  value={this.state.guid_parent}
                  onChange={this.handleInputChange}
                  name="guid_parent"
                >
                  <option value="">Select Member</option>
                  {this.state.parents.map((option) => (
                    <option value={option.bonus}>
                      {option.name + "-" + option.member_code}
                    </option>
                  ))}
                </select>
              </div>
            </Col>
            <Col>
              <div col login-form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="name"
                    value={this.state.bonus}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </div>
            </Col>
            <Col>
              <button
                className="button-class-register"
                variant="succes"
                variant="info"
                onClick={(e) => this.Validasi()}
              >
                Calculate
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
