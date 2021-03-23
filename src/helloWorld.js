import { LitElement, html } from "lit-element";
import "./myMessage";

class HelloWorld extends LitElement {
  static get properties() {
    return {
      message: { type: String },
    };
  }

  constructor() {
    super();
    this.message = "I love litElement hihihi";
  }

  render() {
    return html` <my-message message=${this.message}></my-message> `;
  }
}

customElements.define("hello-world", HelloWorld);
