import React from "react";
import { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.title = "Application mon premier fonctionnel composant";
  }
  render() {
    return (
      <div>
        <h1>{this.title}</h1>
      </div>
    );
  }
}
