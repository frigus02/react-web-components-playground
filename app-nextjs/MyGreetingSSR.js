let MyGreeting;

if (process.browser) {
  MyGreeting = require("./MyGreeting").default;
} else {
  const template = require("shared-web-components/my-greeting-template");
  MyGreeting = () => (
    <my-greeting dangerouslySetInnerHTML={{ __html: template }} />
  );
}

export default MyGreeting;
