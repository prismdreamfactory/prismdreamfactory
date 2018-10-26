import React, { Component } from "react";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

class Contact extends Component {
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
        <div className="page contact">
          <div className="page__container">
            <h3>
              If you are interested in taking your business <br /> to the next
              level, let's get in touch.
            </h3>

            <a href="mailto:dennis@prismgateway.com">dennis@prismgateway.com</a>
          </div>
        </div>
      </Transition>
    );
  }
}

export default Contact;
