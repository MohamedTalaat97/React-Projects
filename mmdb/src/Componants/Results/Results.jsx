import React, { Component } from "react";
import CardComp from "./Card.jsx";
import { Consumer } from "../../Context.jsx";

export default class Results extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          return (
            <div className="container">
              <div className="row">
                {value.Media.map(mediaObj => (
                  <CardComp item={mediaObj} />
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
