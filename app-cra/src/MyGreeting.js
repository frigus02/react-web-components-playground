import customElement from "shared-custom-element-wrapper";
import "shared-web-components/my-greeting-shadow-dom";

const MyGreeting = customElement("my-greeting", {
  salutation: { type: "attribute", name: "salutation" },
  traits: { type: "property", name: "traits" },
  onWave: { type: "event", name: "wave" }
});

export default MyGreeting;
