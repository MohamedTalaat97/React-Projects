import React, { Component } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleSearch = e => {
    this.props.handler(this.input.current.value);
    console.log();
  };
  render() {
    //let val = e;

    return (
      <div className="container mt-3">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Movie Or Tv-Show"
            aria-label="Ente movie or tv show"
            aria-describedby="basic-addon2"
            ref={this.input}
          />
          <InputGroup.Append>
            <Button variant="danger" bg="light" onClick={this.handleSearch}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}
