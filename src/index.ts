/**
 * import * as _ from 'lodash-es';
import {render, html} from 'lit-html'
import * as dayjs from 'dayjs'
let x = `Hello     `
alert(_.trim(x) + `James`);
alert(dayjs('2019-08-08') )
 */
class MyComponent extends HTMLElement {
  [x: string]: any;
  static get observedAttributes() {
    return ["text"];
  }
  constructor() {
    super();
  }
  connectedCallback() {

    this.attachShadow({ mode: "open" }).innerHTML = `<style>
      h1 {color:var(--wc-color, green);}
      </style>
      <h1>${this.text} Hello world! from inside web component</h1>`;
  }
  attributeChangedCallback(attr: string | number, oldValue: any, newValue: any) {
    this[attr] = newValue;
  }
}
window.customElements.define("my-component", MyComponent);
