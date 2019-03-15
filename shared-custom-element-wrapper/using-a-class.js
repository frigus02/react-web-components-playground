import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";

const customElement = (name, props) => {
  const TagName = name;
  const attributes = [];
  const properties = [];
  const events = [];
  const propTypes = {};
  for (const reactProp of Object.keys(props)) {
    const description = { ...props[reactProp], reactProp };
    switch (description.type) {
      case "attribute":
        attributes.push(description);
        propTypes[reactProp] = PropTypes.string;
        break;
      case "property":
        properties.push(description);
        propTypes[reactProp] = PropTypes.any;
        break;
      case "event":
        events.push(description);
        propTypes[reactProp] = PropTypes.func;
        break;
      default:
        console.warn(
          `Unknown web component property type "${description.type}".`
        );
    }
  }

  const filterProps = (reactProps, typeList) => {
    const filteredProps = {};
    for (const item of typeList) {
      filteredProps[item.name] = reactProps[item.reactProp];
    }

    return filteredProps;
  };

  return class extends PureComponent {
    static displayName = `CustomElement(${name})`;
    static propTypes = propTypes;

    elementRef = createRef();

    componentDidUpdate() {
      this._renderWebComponentProps();
    }

    componentDidMount() {
      this._renderWebComponentProps();
      this._bindWebComponentEvents();
    }

    render() {
      const elementAttrs = filterProps(this.props, attributes);
      return (
        <TagName {...elementAttrs} ref={this.elementRef}>
          {this.props.children}
        </TagName>
      );
    }

    _renderWebComponentProps() {
      const elementProps = filterProps(this.props, properties);
      customElements.whenDefined(this.elementRef.current.localName).then(() => {
        Object.assign(this.elementRef.current, elementProps);
      });
    }

    _bindWebComponentEvents() {
      for (const event of events) {
        this.elementRef.current.addEventListener(event.name, e => {
          if (event.reactProp in this.props) {
            this.props[event.reactProp](e);
          }
        });
      }
    }
  };
};

export default customElement;
