import React, { Component } from "react";
import { Transition } from "react-transition-group";
import { TweenMax, TimelineMax } from "gsap";

const projects = [
  "/images/Universal.svg",
  "/images/Verizon.svg",
  "/images/Fox.svg",
  "/images/Nike.svg",
  "/images/Hurley.svg",
  "/images/GlobalRoad.svg",
  "/images/Mnet.svg",
  "/images/Kcon.svg",
  "/images/Westfield.svg"
];

class Work extends Component {
  constructor(props) {
    super(props);
    this.overlay = null;
    this.content = null;
    this.gridItems = [];
  }

  onEnter = () => {
    const workTL = new TimelineMax();

    workTL
      .set(this.overlay, { autoAlpha: 0.3 })
      .set(this.content, { autoAlpha: 0 })
      .to(this.overlay, 1, {
        skewX: 0,
        x: "100%",
        transformOrigin: "0% 100%"
      })
      .to(this.content, 0.3, {
        autoAlpha: 1
      })
      .to(this.overlay, 1, {
        autoAlpha: 0
      })
      .staggerFromTo(
        this.gridItems,
        0.3,
        { autoAlpha: 0 },
        { autoAlpha: 1 },
        0.04,
        "-=0.75"
      );
  };

  onExit = () => {
    TweenMax.to(this.content, 0.3, {
      autoAlpha: 0
    });
  };

  renderProjects() {
    return (
      <div className="grid">
        {projects.map((project, index) => (
          <div
            className="grid__item"
            key={index}
            ref={el => (this.gridItems[index] = el)}
          >
            {/*}<a className="grid__link" href="/">*/}
            <img className="grid__img" src={project} alt="Project" />
            {/*</a>*/}
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <Transition
        unmountOnExit
        in={this.props.show}
        timeout={1000}
        onEnter={this.onEnter}
        onExit={this.onExit}
      >
        <div className="page work">
          <div
            className="page__overlay page__overlay--topright"
            ref={el => (this.overlay = el)}
          />
          <div className="page__container" ref={el => (this.content = el)}>
            <h2>Street Cred.</h2>
            <p>These are some brands our team has worked with in the past.</p>
            {this.renderProjects()}
          </div>
        </div>
      </Transition>
    );
  }
}

export default Work;
