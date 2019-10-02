import React, { Component } from "react";
import { Consumer } from "../Context.jsx";
import { Card } from "react-bootstrap";

export default class Details extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://img.posterlounge.co.uk/img/products/640000/631106/631106_poster_l.jpg"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>{value.Media[0].title}</Card.Title>
                  <Card.Text>year</Card.Text>
                  <Card.Text> whats next</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

/*

*/
