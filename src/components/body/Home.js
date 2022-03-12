import React, { Component } from "react";
// import Loading from "./Loading";

export default class Home extends Component {
  render() {
    document.title = "Home";
    return (
      <div className="main-body">
        {/* <Loading /> */}
        <div className="banner" id="banner">
          <h1>Welcome To</h1>
          <h3>Cafe & Restauratnt </h3>
        </div>
      </div>
    );
  }
}
