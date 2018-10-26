import React, { Component } from "react";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

const projects = [
  "http://placehold.it/320x180?text=+",
  "http://placehold.it/320x180?text=+",
  "http://placehold.it/320x180?text=+",
  "http://placehold.it/320x180?text=+",
  "http://placehold.it/320x180?text=+",
  "http://placehold.it/320x180?text=+",
  "http://placehold.it/320x180?text=+",
  "http://placehold.it/320x180?text=+",
  "http://placehold.it/320x180?text=+"
];

class Work extends Component {
  onEnter = () => {};

  addEndListener = (node, done) => {
    TweenMax.to(node, 0.5, {
      autoAlpha: this.props.show ? 1 : 0,
      y: this.props.show ? 0 : 50,
      onComplete: done
    });
  };

  renderProjects() {
    return (
      <div className="grid">
        {projects.map(project => (
          <div className="grid__item">
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
        addEndListener={this.addEndListener}
      >
        <div className="page work">
          <div className="page__container">{this.renderProjects()}</div>
        </div>
      </Transition>
    );
  }
}

export default Work;
