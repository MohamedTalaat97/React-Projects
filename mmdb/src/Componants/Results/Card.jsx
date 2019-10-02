import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class CardComp extends Component {
  render() {
    const { title, year, poster } = this.props.item;
    return (
      <div className=" col-md-3 col-sm-12">
        <Card>
          <Card.Img variant="top" src={poster} />
          <Card.Body>
            <Card.Title> {title}</Card.Title> <Card.Text>{year}</Card.Text>{" "}
            <Button variant="primary"> Details </Button>{" "}
          </Card.Body>{" "}
        </Card>{" "}
      </div>
    );
  }
}
