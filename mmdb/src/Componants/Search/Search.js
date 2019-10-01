import React, { Component } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";

export default class Search extends Component {
  render() {
    return (
      <div className="container mt-3">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Movie Or Tv-Show"
            aria-label="Ente movie or tv show"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="danger" bg="light">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}
