import React, { Component } from "react";
import tt from "../assets/images/tt.png";

class Home extends Component {
  render() {
    return (
      <div>
        <img className="home__title" src={tt} alt="Prism Dream Factory Title" />
      </div>
    );
  }
}

export default Home;
