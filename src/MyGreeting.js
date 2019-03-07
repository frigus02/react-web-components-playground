import customElement from "./customElement";

const MyGreeting = customElement("my-greeting", {
  salutation: { type: "attribute", name: "salutation" },
  traits: { type: "property", name: "traits" },
  onWave: { type: "event", name: "wave" }
});

export default MyGreeting;
