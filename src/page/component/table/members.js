import React, { Component } from "react";
import { Table, Pagination, Modal } from "react-bootstrap";
import Services from "../../service/services";
import "../css/page.css"
import AlertComponent from "../alert/alert";

export default class MemberView extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    Services.GetPMember()
      .then((res) => {
        const lists = res.data.member;
        this.setState({ lists });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  }

  render() {
    return (
      <div>
      
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="TextTable">No</th>
              <th className="TextTable">Guid</th>
              <th className="TextTable">Nama Member</th>
              {/* <th className="TextTable">Kode Member</th> */}
              <th className="TextTable">Bonus</th>
              <th className="TextTable">Level</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </Table>
        </div>
    );
  }

  renderTable() {
    return this.state.lists.map((list, index) => {
      const {
        _id,
        name,
       bonus,
        level,
        member_code,
        guid
      } = list;
      return (
        <tr key={_id}>
          <td className="Textisi ">{index + 1}</td>
          <td className="Textisi ">{guid}</td>
          <td className="Textisi ">{name}</td>
          {/* <td className="Textisi ">{member_code}</td> */}
          <td className="Textisi ">${bonus}</td>
          <td className="Textisi ">{level}</td>
        </tr>
      );
    });
  }
}