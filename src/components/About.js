import React, { Component } from "react";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

class About extends Component {
  onEnter = () => {};

  addEndListener = (node, done) => {
    TweenMax.to(node, 0.5, {
      autoAlpha: this.props.show ? 1 : 0,
      y: this.props.show ? 0 : 50,
      onComplete: done
    });
  };

  render() {
    return (
      <Transition
        unmountOnExit
        in={this.props.show}
        timeout={1000}
        onEnter={this.onEnter}
        addEndListener={this.addEndListener}
      >
        <div className="page about">
          <div className="page__container">
            <h2>Living the Dream</h2>
            <p>
              Prism Dream Factory is a LA based marketing strategy group that
              focuses on helping companies scale, go to market, penetrate
              emerging markets, develop products, or enhance services for
              platforms that may spread altruism and serve a greater purpose
              beyond monetary gain. We believe in order to expand the human
              condition and consciousness, we must first use the systems set in
              place, understand it, infiltrate it, and then change it while
              being wholly transparent.
            </p>
          </div>
        </div>
      </Transition>
    );
  }
}

export default About;
