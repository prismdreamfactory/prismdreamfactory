import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import { TweenMax, TimelineMax } from 'gsap';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.overlay = null;
    this.content = null;
  }

  onEnter = () => {
    const contactTL = new TimelineMax();

    contactTL
      .set(this.overlay, { autoAlpha: 0.3 })
      .set(this.content, { autoAlpha: 0 })
      .to(this.overlay, 1, {
        skewX: 0,
        x: '-100%',
        transformOrigin: '0% 0%'
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

  render() {
    return (
      <Transition
        unmountOnExit
        in={this.props.show}
        timeout={1000}
        onEnter={this.onEnter}
        onExit={this.onExit}
      >
        <div className="page contact">
          <div
            className="page__overlay page__overlay--topleft"
            ref={el => (this.overlay = el)}
          />
          <div className="page__container" ref={el => (this.content = el)}>
            <h3>Interested in partnering with us?</h3>

            <a href="mailto:dennis@prismdreamfactory.com">
              dennis@prismdreamfactory.com
            </a>
          </div>
        </div>
      </Transition>
    );
  }
}

export default Contact;
