import React, { useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";

const customElement = (elementName, propsMapping) => {
  const TagName = elementName;
  const attributes = [];
  const properties = [];
  const events = [];
  const propTypes = {};
  for (const reactProp of Object.keys(propsMapping)) {
    const description = { ...propsMapping[reactProp], reactProp };
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

  const Component = props => {
    const elementRef = useRef();

    useLayoutEffect(() => {
      const elementProps = filterProps(props, properties);
      customElements.whenDefined(elementRef.current.localName).then(() => {
        Object.assign(elementRef.current, elementProps);
      });
    }, properties.map(p => props[p.reactProp]));

    useLayoutEffect(() => {
      const elementEvents = filterProps(props, events);
      for (const event in elementEvents) {
        elementRef.current.addEventListener(event, elementEvents[event]);
      }

      return () => {
        for (const event in elementEvents) {
          elementRef.current.removeEventListener(event, elementEvents[event]);
        }
      };
    }, events.map(e => props[e.reactProp]));

    const elementAttrs = filterProps(props, attributes);
    return (
      <TagName {...elementAttrs} ref={elementRef}>
        {props.children}
      </TagName>
    );
  };

  Component.displayName = `CustomElement(${elementName})`;
  Component.propTypes = propTypes;

  return Component;
};

export default customElement;
