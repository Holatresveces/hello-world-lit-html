import { LitElement, html } from "lit-element";

class MyMessage extends LitElement {
  static get properties() {
    return {
      message: { type: String },
    };
  }

  // constructor() {
  //   super();
  //   this.message = "Message at initialization";
  // }

  render() {
    return html`<div>${this.message}</div>`;
  }
}

customElements.define("my-message", MyMessage);
