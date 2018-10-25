import React, { Component } from "react";

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
      <div className="page work">
        <div className="page__container">{this.renderProjects()}</div>
      </div>
    );
  }
}

export default Work;
