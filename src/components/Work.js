import React, { Component } from "react";
import { Transition } from "react-transition-group";
import { TweenMax, TimelineMax } from "gsap";

const projects = [
  "https://placehold.it/320x180?text=+",
  "https://placehold.it/320x180?text=+",
  "https://placehold.it/320x180?text=+",
  "https://placehold.it/320x180?text=+",
  "https://placehold.it/320x180?text=+",
  "https://placehold.it/320x180?text=+",
  "https://placehold.it/320x180?text=+",
  "https://placehold.it/320x180?text=+",
  "https://placehold.it/320x180?text=+"
];

class Work extends Component {
  constructor(props) {
    super(props);
    this.overlay = null;
    this.content = null;
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
      });
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
          <div className="grid__item" key={index}>
            <a className="grid__link" href="/">
              <img className="grid__img" src={project} alt="Project" />
            </a>
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
            {this.renderProjects()}
          </div>
        </div>
      </Transition>
    );
  }
}

export default Work;
