import React, { Component } from "react";
import Loading from "./Loading";

export default class Home extends Component {
  render() {
    document.title = "Home";
    return (
      <div>
        <Loading />
      </div>
    );
  }
}
