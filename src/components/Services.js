import React, { Component } from "react";
import { Transition } from "react-transition-group";
import { TweenMax, TimelineMax } from "gsap";

const services = [
  "Business Development & Marketing Strategy",
  "Company Branding, Sales & Investment Decks",
  "Social Media Strategy & Management",
  "UI & UX Design",
  "Web & Print Design",
  "Product Development, Apparel Design & 3D Modeling",
  "Web & Mobile App Development",
  "Film Production, Video/Photo Content Creation & VFX",
  "Live Event Production"
];

class Services extends Component {
  constructor(props) {
    super(props);
    this.overlay = null;
    this.content = null;
    this.listItems = [];
  }

  onEnter = () => {
    const servicesTL = new TimelineMax();

    servicesTL
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
        this.listItems,
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

  renderServices() {
    return (
      <ul className="services-list">
        {services.map((service, index) => (
          <li
            className="services-list__item"
            key={index}
            ref={el => (this.listItems[index] = el)}
          >
            {service}
          </li>
        ))}
      </ul>
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
        <div className="page services">
          <div
            className="page__overlay page__overlay--bottomright"
            ref={el => (this.overlay = el)}
          />
          <div className="page__container" ref={el => (this.content = el)}>
            <h2>What We Do</h2>

            {this.renderServices()}
          </div>
        </div>
      </Transition>
    );
  }
}

export default Services;
