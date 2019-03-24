import React, { useRef, useLayoutEffect } from "react";

const MyGreeting = props => {
  const elementRef = useRef();

  const traits = props.traits;
  useLayoutEffect(() => {
    customElements.whenDefined(elementRef.current.localName).then(() => {
      elementRef.current.traits = traits;
    });
  }, [traits]);

  const onWave = props.onWave;
  useLayoutEffect(() => {
    elementRef.current.addEventListener("wave", onWave);
    return () => {
      elementRef.current.removeEventListener("wave", onWave);
    };
  }, [onWave]);

  return (
    <my-greeting salutation={props.salutation} ref={elementRef}>
      {props.children}
    </my-greeting>
  );
};

export default MyGreeting;
