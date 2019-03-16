let MyGreeting;

if (process.browser) {
  const customElement = require("shared-custom-element-wrapper").default;
  require("shared-web-components/my-greeting-using-template");
  MyGreeting = customElement("my-greeting", {
    salutation: { type: "attribute", name: "salutation" },
    traits: { type: "property", name: "traits" },
    onWave: { type: "event", name: "wave" }
  });
} else {
  const template = require("shared-web-components/my-greeting-template");
  MyGreeting = () => (
    <my-greeting dangerouslySetInnerHTML={{ __html: template }} />
  );
}

export default MyGreeting;
