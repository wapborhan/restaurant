import React, { Component } from "react";
// import Loading from "./Loading";

export default class Home extends Component {
  render() {
    document.title = "Home";
    return (
      <div className="main-body">
        {/* <Loading /> */}
        <div
          className="banner text-center text-light"
          style={{
            backgroundImage: `url("assets/banner.jpg")`,
            backgroundSize: "cover",
          }}
        >
          <div className="contect">
            <h1>Welcome To</h1>
            <h3>Cafe & Restauratnt </h3>
          </div>
        </div>
      </div>
    );
  }
}
