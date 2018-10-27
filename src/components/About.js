import React, { Component } from "react";
import { Transition } from "react-transition-group";
import { TweenMax, TimelineMax } from "gsap/all";

class About extends Component {
  constructor(props) {
    super(props);
    this.overlay = null;
    this.content = null;
  }

  onEnter = () => {
    const aboutTL = new TimelineMax()
      .set(this.overlay, { autoAlpha: 1 })
      .set(this.content, { autoAlpha: 0 })
      .to(this.overlay, 1, {
        skewX: 0,
        x: "-100%",
        transformOrigin: "0% 100%"
      })
      .to(this.content, 0.3, {
        autoAlpha: 1
      })
      .to(this.overlay, 1, {
        autoAlpha: 0
      })
      .play();
  };

  onExit = () => {
    TweenMax.to(this.content, 0.3, {
      autoAlpha: 0
    });
  };

  render() {
    return (
      <Transition
        unmountOnExit
        in={this.props.show}
        timeout={1000}
        onEnter={this.onEnter}
        onExit={this.onExit}
      >
        <div className="page about">
          <div
            className="page__overlay page__overlay--bottomleft"
            ref={el => (this.overlay = el)}
          />
          <div className="page__container" ref={el => (this.content = el)}>
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
