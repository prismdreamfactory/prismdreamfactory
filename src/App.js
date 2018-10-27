import React, { Component } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import { TimelineMax } from "gsap/all";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import bg from "./assets/images/bg.jpg";
import logo from "./assets/images/logo.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.app = null;
    this.logo = null;
  }

  componentDidMount() {
    const siteTL = new TimelineMax();

    siteTL
      .fromTo(this.app, 0.5, { autoAlpha: 0 }, { autoAlpha: 1 })
      .to(this.logo, 0.3, { autoAlpha: 1 });
  }

  // Toggle mobile navigation
  toggleMenu = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <Router>
        <div className="app" ref={el => (this.app = el)}>
          <div
            className="app__bg"
            style={{
              backgroundImage: `url(${bg})`
            }}
          />

          <header className="app__header">
            <Link to="/">
              <img
                className="app__logo"
                src={logo}
                alt="Prism Dream Factory Logo"
                ref={el => (this.logo = el)}
              />
            </Link>
          </header>

          <nav className="nav--desktop">
            <NavLink to="/" className="app__link mod--top-left">
              <span>Prism Dream Factory</span>
            </NavLink>
            <NavLink to="/about" className="app__link mod--top-right">
              <span>About</span>
            </NavLink>
            <NavLink to="/work" className="app__link mod--bottom-left">
              <span>Work</span>
            </NavLink>
            <NavLink to="/contact" className="app__link mod--bottom-right">
              <span>Contact</span>
            </NavLink>
          </nav>

          <nav className={isOpen ? "nav--mobile mod--open" : "nav--mobile"}>
            <NavLink to="/" className="app__link" onClick={this.toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/work" className="app__link" onClick={this.toggleMenu}>
              Work
            </NavLink>
            <NavLink
              to="/about"
              className="app__link"
              onClick={this.toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="app__link"
              onClick={this.toggleMenu}
            >
              Contact
            </NavLink>
          </nav>

          <div className="nav__toggle">
            <div
              className={isOpen ? "nav__icon mod--open" : "nav__icon"}
              onClick={this.toggleMenu}
            >
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <Route path="/" exact>
            {({ match }) => <Home show={match !== null} />}
          </Route>
          <Route path="/work">
            {({ match }) => <Work show={match !== null} />}
          </Route>
          <Route path="/about">
            {({ match }) => <About show={match !== null} />}
          </Route>
          <Route path="/contact">
            {({ match }) => <Contact show={match !== null} />}
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
