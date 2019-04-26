//import "./app";
//import * as dayjs from "dayjs";
const dayjs = require("dayjs");
// dayjs ⚠️ requires relativeTime plugin
//import relativeTime from "dayjs/plugin/relativeTime";
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

import "./style.scss";

import {render, html} from "lit-html";


import trim from "lodash-es/trim";
import debounce from "lodash-es/debounce";

var s;

s = {};

s._makeSearchRequest = function() {
  return console.log("making search request");
};

s.search = debounce(s._makeSearchRequest, 1000);

// call s.search three times in a row
s.search();
s.search();
s.search();

// call s.search after 500 ms
setTimeout(s.search, 500);

// call s.search after 3 seconds
setTimeout(s.search, 3000);

// timer to show passage of time
var i = 0;
var t = setInterval(function() {
  i += 1;
  console.log(i + " seconds elapsed");
  if (i > 5) {
    clearInterval(t);
  }
}, 1000);

//import trim from "lodash-es/trim";


let x = `Hello     `;
alert(x + `James`);
alert(trim(x) + `James`);

class MyComponent extends HTMLElement {
    text: string;
    comment: string;
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
      <h1>A long time ago ${dayjs(1556290746613).fromNow()}</h1>
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
