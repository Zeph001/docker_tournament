import React, { Component } from "react";


export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 id="home">Home</h1>
        <h2>Status: {this.props.loggedInStatus}</h2>
      </div>
    );
  }
}

