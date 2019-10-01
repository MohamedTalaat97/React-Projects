import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

import "./Jumbo.css";

export default class Jumbo extends Component {
  render() {
    return (
      <div className="container-fluid jumbo">
        <div className="row">
          <div className="col-md-4 Info col-sm-12">
            <h1>MMDB</h1>
            <p>Your Personal Movie Data Base</p>
          </div>
          <div className="col"></div>
          <div className="col-md-4 col-sm-12">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember" />
              </Form.Group>
              <Button variant="outline-light" type="submit">
                Sign Up
              </Button>
            </Form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}
