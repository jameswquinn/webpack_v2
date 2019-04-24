/*
import * as _ from 'lodash-es';
import {render, html} from 'lit-html'
import * as dayjs from 'dayjs'
let x = `Hello     `
alert(_.trim(x) + `James`);
alert(dayjs('2019-08-08') )
 
// A lit-html template uses the `html` template tag:
let sayHello = (name) => html`<h1>Hello ${name}</h1>`;

// It's rendered with the `render()` function:
render(sayHello('World'), document.body);

// And re-renders only update the data that changed, without VDOM diffing!
render(sayHello('Everyone'), document.body);
*/
import './style.scss'
class MyComponent extends HTMLElement {
  [x: string]: any;
  static get observedAttributes() {
    return ["text", "comment"];
  }
  constructor() {
    super();
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }).innerHTML = `<style>
      h1 {color:var(--wc-color, green);}
      </style>
      <h1>${this.text} Hello world! from inside web component</h1>
      <h1>${this.comment} Hello world! from inside web component</h1>`;
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    this[attr] = newValue;
  }
}
window.customElements.define("my-component", MyComponent);
