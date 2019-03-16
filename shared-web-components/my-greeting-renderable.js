const html = String.raw;
const tmpl = document.createElement("template");
tmpl.innerHTML = html`
  <style>
    #wave {
      background: none;
      border: none;
      padding: 0;
      margin: 0;
      font-size: 16px;
      transition: transform 0.1s ease;
    }
    #wave:hover {
      transform: scale(3);
    }
    #wave:active {
      transform: scale(2.9) rotate(10deg);
    }
  </style>

  <div>
    <span id="salutation"></span> <span id="traits"></span>
    <button id="wave">👋</button>
  </div>
`;

class MyGreeting extends HTMLElement {
  static get observedAttributes() {
    return ["salutation"];
  }

  constructor(...args) {
    // https://github.com/WebReflection/document-register-element#upgrading-the-constructor-context
    const self = super(...args);
    self._salutation = "Hello";
    self._traits = [];
    self._waves = 0;
    self._rendered = false;
    return self;
  }

  get salutation() {
    return this._salutation;
  }

  set salutation(value) {
    this._salutation = value;
    this._render();
  }

  get traits() {
    return this._traits;
  }

  set traits(value) {
    this._traits = value;
    this._render();
  }

  connectedCallback() {
    this._render();
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === "salutation") {
      this.salutation = newValue;
    }
  }

  _render() {
    if (!this._rendered) {
      this._rendered = true;
      this.appendChild(tmpl.content.cloneNode(true));
      this._salutationElement = this.querySelector("#salutation");
      this._traitsElement = this.querySelector("#traits");
      this._waveElement = this.querySelector("#wave");
      this._waveElement.addEventListener("click", () => {
        this._waves++;
        this.dispatchEvent(
          new CustomEvent("wave", {
            detail: this._waves
          })
        );
      });
    }

    this._salutationElement.textContent = this._salutation;
    this._traitsElement.textContent = this._traits.join(", ");
  }
}

customElements.define("my-greeting", MyGreeting);
