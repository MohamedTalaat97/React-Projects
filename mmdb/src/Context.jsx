import React, { Component } from "react";

const Context = React.createContext();
export default class Provider extends Component {
  state = {
    Media: [
      {
        title: "inception",
        year: "2010",
        poster:
          "https://is2-ssl.mzstatic.com/image/thumb/Video113/v4/83/84/eb/8384eb90-6fa0-1a28-a838-b23437efd244/pr_source.lsr/268x0w.jpg"
      },
      {
        title: "the leftovers",
        year: "2012",
        poster:
          "https://cdn.vox-cdn.com/thumbor/Tp8AgQKbRxZRGmJxgbp67x93iKo=/0x0:5108x3405/1200x800/filters:focal(1521x896:2337x1712)/cdn.vox-cdn.com/uploads/chorus_image/image/55090061/89d9bf63cee5a42baa6a09006b3af60e6773714ecceb94628a989aab57f56c7ed970747761d67ac4a9624b8c0d77d9cc.0.jpg"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
