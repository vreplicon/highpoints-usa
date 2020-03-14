import Table from "react-bootstrap/Table";
import { highpoints } from "../../data";

import React, { Component } from "react";

export default class PointsTable extends Component<{}, {}> {
  render() {
    const tableLines = highpoints.map((x, i) => {
      return (
        <tr key={i}>
          <td>{x.state}</td>
          <td>{x.name}</td>
          {/* <td></td> */}
        </tr>
      );
    });

    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>State</th>
              <th>Name</th>
              {/* <th>Last Name</th>
              <th>Username</th> */}
            </tr>
          </thead>
          <tbody>{tableLines}</tbody>
        </Table>
      </div>
    );
  }
}
