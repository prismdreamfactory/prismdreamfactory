import React, { Component } from "react";
import bg from "./assets/images/bg.jpg";
import logo from "./assets/images/logo.png";
import tt from "./assets/images/tt.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__bg" style={{ backgroundImage: `url(${bg})` }} />

        <img className="app__logo" src={logo} alt="Prism Dream Factory Logo" />
        <img className="home__title" src={tt} alt="Prism Dream Factory Title" />

        <a href="/" className="app__link">
          Prism Dream Factory
        </a>
        <a href="/about" className="app__link">
          About
        </a>
        <a href="/contact" className="app__link">
          Contact
        </a>
      </div>
    );
  }
}

export default App;
