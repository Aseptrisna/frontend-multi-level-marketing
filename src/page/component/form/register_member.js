import React, { Component } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Button, FormGroup, Label, Input } from "reactstrap";
import Services from "../../service/services";
import AlertComponent from "../alert/alert";
export default class MemberCreateView extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
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
    if (this.state.name ==="") {
        AlertComponent.Error("Kolom Harus Di isi Semua!!!");
      } else {
        this.OnCreate();
      }
  }
  OnCreate() {
    const data={
        name:this.state.name,
        guid_parent:this.state.guid_parent
    };
    Services.AddMember(data)
    .then((response) => {
      if (response.data.status) {
        AlertComponent.Succes(response.data.message);
        window.location.reload(false);
      } else {
        AlertComponent.Error(response.data.message);
      }
    })
    .catch((e) => {
      console.log(e);
    });
  }
  render() {
    return (
      <div>
        <h6>Register Member Baru</h6>
        <Container>
          <Row>
            <Col>
              <div col login-form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Enter Member Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </div>
            </Col>
            <Col>
              <div className="form-group">
                {/* <label>Parent</label> */}
                <select
                  className="form-control"
                  value={this.state.guid_parent}
                  onChange={this.handleInputChange}
                  name="guid_parent"
                >
                  <option value="">No Parent</option>
                  {this.state.parents.map((option) => (
                    <option value={option.guid}>
                      {option.name + "-" +option.member_code}
                    </option>
                  ))}
                </select>
              </div>
            </Col>
            <Col>
              <button className="button-class-register" variant="succes" onClick={(e) => this.Validasi()}>
                Register
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
