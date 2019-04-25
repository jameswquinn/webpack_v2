import "./app";
import "./style.scss";

import { render, html } from "lit-html";

import trim from "lodash-es/trim";
let x = `Hello     `;
alert(x + `James`);
alert(trim(x) + `James`);

class MyComponent extends HTMLElement {
    text: unknown;
    comment: unknown;
  static get observedAttributes() {
    return ["text", "comment"];
  }
  constructor() {
    super();
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    const template = html`
      <style>
        h1 {
          color: var(--wc-color, green);
        }
      </style>
      <h1>${this.text} Hello world! from inside web component</h1>
      <h1>${this.comment} Hello world! from inside web component</h1>
    `;
    render(template, this.shadowRoot);
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    this[attr] = newValue;
  }
}
window.customElements.define("my-component", MyComponent);
