const { JSDOM } = require("jsdom");
const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);

async function render(elementName, attributes = {}, properties = {}) {
  const dom = new JSDOM(`<!DOCTYPE html><${elementName}></${elementName}>`, {
    url: "https://example.org/",
    runScripts: "dangerously",
    pretendToBeVisual: true
  });

  await loadScript(
    dom,
    "document-register-element/build/document-register-element.js"
  );
  await loadScript(dom, `shared-web-components/${elementName}-renderable.js`);

  const element = dom.window.document.querySelector(elementName);

  for (const name in attributes) {
    element.setAttribute(name, attributes[name]);
  }

  for (const name in properties) {
    element[name] = properties[name];
  }

  await delay();

  return element.outerHTML;
}

async function loadScript(dom, lib) {
  const code = await readFile(`../node_modules/${lib}`, "utf8");
  const scriptEl = dom.window.document.createElement("script");
  scriptEl.textContent = code;
  dom.window.document.head.appendChild(scriptEl);
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

module.exports = render;
