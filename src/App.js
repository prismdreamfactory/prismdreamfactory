import React, { Component } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import { TimelineMax } from "gsap";
import { Video } from "cloudinary-react";
import Home from "./components/Home";
import Services from "./components/Services";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import bg from "./assets/images/bg.jpg";
// import bgVideo from "./assets/videos/bg-clouds.mp4";
import logo from "./assets/images/logo.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.app = null;
    this.logo = null;
    this.mobileNav = null;
    this.mobileNavLinks = [];
    this.mobileNavTL = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    const siteTL = new TimelineMax();

    siteTL
      .fromTo(this.app, 0.5, { autoAlpha: 0 }, { autoAlpha: 1 })
      .to(this.logo, 0.3, { autoAlpha: 1 });

    this.mobileNavTL
      .addLabel("mobile")
      .fromTo(
        this.mobileNav,
        0.2,
        { autoAlpha: 0, height: 0 },
        { autoAlpha: 1, height: "100%" }
      )
      .staggerFromTo(
        this.mobileNavLinks,
        0.2,
        { autoAlpha: 0 },
        { autoAlpha: 1 },
        0.03,
        "mobile"
      );
  }

  // Toggle mobile navigation
  toggleMenu = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));

    if (!this.state.isOpen) {
      this.mobileNavTL.play();
    } else {
      this.mobileNavTL.reverse();
    }
  };

  render() {
    const { isOpen } = this.state;

    return (
      <Router>
        <div className="app" ref={el => (this.app = el)}>
          {/*}<div
            className="app__bg"
            style={{
              backgroundImage: `url(${bg})`
            }}
          />*/}

          <Video
            className="app__bg app__bg--video"
            autoPlay
            loop
            muted
            playsInline
            cloudName="prismdreamfactory"
            publicId="prismdreamfactory/bg-clouds"
            poster={bg}
            quality="80:qmax_20"
          />

          <div className="app__opacity" />

          {/*}<video
            className="app__bg app__bg--video"
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
          />*/}

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
            <NavLink to="/services" className="app__link mod--top-left">
              <span>What We Do</span>
            </NavLink>
            <NavLink to="/about" className="app__link mod--top-right">
              <span>About</span>
            </NavLink>
            <NavLink to="/work" className="app__link mod--bottom-left">
              <span>Our Work</span>
            </NavLink>
            <NavLink to="/contact" className="app__link mod--bottom-right">
              <span>Contact</span>
            </NavLink>
          </nav>

          <nav className="nav--mobile" ref={el => (this.mobileNav = el)}>
            <div
              className="app__link-wrapper"
              ref={el => this.mobileNavLinks.push(el)}
            >
              <Link
                to="/"
                className="app__link"
                onClick={this.toggleMenu}
                ref={el => this.mobileNavLinks.push(el)}
              >
                Home
              </Link>
            </div>
            <div
              className="app__link-wrapper"
              ref={el => this.mobileNavLinks.push(el)}
            >
              <Link
                to="/services"
                className="app__link"
                onClick={this.toggleMenu}
                ref={el => this.mobileNavLinks.push(el)}
              >
                What We Do
              </Link>
            </div>
            <div
              className="app__link-wrapper"
              ref={el => this.mobileNavLinks.push(el)}
            >
              <Link
                to="/work"
                className="app__link"
                onClick={this.toggleMenu}
                ref={el => this.mobileNavLinks.push(el)}
              >
                Our Work
              </Link>
            </div>
            <div
              className="app__link-wrapper"
              ref={el => this.mobileNavLinks.push(el)}
            >
              <Link to="/about" className="app__link" onClick={this.toggleMenu}>
                About
              </Link>
            </div>
            <div
              className="app__link-wrapper"
              ref={el => this.mobileNavLinks.push(el)}
            >
              <Link
                to="/contact"
                className="app__link"
                onClick={this.toggleMenu}
                ref={el => this.mobileNavLinks.push(el)}
              >
                Contact
              </Link>
            </div>
          </nav>

          <div className="nav__toggle">
            <div
              className={isOpen ? "nav__icon mod--open" : "nav__icon"}
              onClick={this.toggleMenu}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <Route path="/" exact>
            {({ match }) => <Home show={match !== null} />}
          </Route>
          <Route path="/services">
            {({ match }) => <Services show={match !== null} />}
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
