import React, { Component } from "react";
import { Transition } from "react-transition-group";
import { TweenMax, TimelineMax } from "gsap/all";
import DrawSVGPlugin from "../assets/gsap-bonus/DrawSVGPlugin";
import ReactSVG from "react-svg";
import tt from "../assets/images/tt.svg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.overlay = null;
    this.content = null;
  }

  onEnter = () => {
    const homeTL = new TimelineMax()
      .set(this.overlay, { autoAlpha: 0.5 })
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
      .play();
  };

  onExit = () => {
    TweenMax.to(this.content, 1, {
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
        <div className="page home">
          <div
            className="page__overlay page__overlay--bottomright"
            ref={el => (this.overlay = el)}
          />
          <div className="page__container" ref={el => (this.content = el)}>
            <ReactSVG src={tt} className="svg home__title" />
          </div>
        </div>
      </Transition>
    );
  }
}

export default Home;
