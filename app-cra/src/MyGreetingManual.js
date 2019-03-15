import React, { PureComponent, createRef } from "react";
import "shared-web-components/my-greeting-shadow-dom";

class MyGreeting extends PureComponent {
  elementRef = createRef();

  componentDidUpdate() {
    this._renderWebComponentProps();
  }

  componentDidMount() {
    this._renderWebComponentProps();
    this._bindWebComponentEvents();
  }

  render() {
    const greetingAttrs = {
      salutation: this.props.salutation
    };

    return (
      <my-greeting {...greetingAttrs} ref={this.elementRef}>
        {this.props.children}
      </my-greeting>
    );
  }

  _renderWebComponentProps() {
    const greetingProps = {
      traits: this.props.traits
    };

    customElements.whenDefined(this.elementRef.current.localName).then(() => {
      Object.assign(this.elementRef.current, greetingProps);
    });
  }

  _bindWebComponentEvents() {
    this.elementRef.current.addEventListener("wave", e => {
      if (this.props.onWave) {
        this.props.onWave(e);
      }
    });
  }
}

export default MyGreeting;
