import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import bg from "./assets/images/bg.jpg";
import logo from "./assets/images/logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="app__bg" style={{ backgroundImage: `url(${bg})` }} />

          <img
            className="app__logo"
            src={logo}
            alt="Prism Dream Factory Logo"
          />

          <Link to="/" className="app__link mod--top-left">
            Prism Dream Factory
          </Link>
          <Link to="/about" className="app__link mod--top-right">
            About
          </Link>
          <Link to="/work" className="app__link mod--bottom-left">
            Work
          </Link>
          <Link to="/contact" className="app__link mod--bottom-right">
            Contact
          </Link>

          <Route path="/" exact component={Home} />
          <Route path="/work" exact component={Work} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
