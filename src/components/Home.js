import React, { Component } from "react";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import DrawSVGPlugin from "../assets/gsap-bonus/DrawSVGPlugin";
import ReactSVG from "react-svg";
// import tt from "../assets/images/tt.png";
import tt from "../assets/images/tt.svg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.title = null;
  }

  onEntered = () => {
    TweenMax.to(this.title, 0.5, {});
  };

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
        onEntered={this.onEntered}
        addEndListener={this.addEndListener}
      >
        <div className="page home">
          {/*<img
            className="home__title"
            src={tt}
            alt="Prism Dream Factory Title"
            ref={el => (this.title = el)}
          />*/}
          <ReactSVG src={tt} className="svg" />
        </div>
      </Transition>
    );
  }
}

export default Home;
