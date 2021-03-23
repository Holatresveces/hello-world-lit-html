import { LitElement, html } from "lit-element";

class MyList extends LitElement {
  static get properties() {
    return {
      list: { type: Array },
    };
  }

  constructor() {
    super();
    this.list = [];
  }

  render() {
    return html`
      <ul>
        ${this.list.map((item) => html`<li>${item.name}</li>`)}
      </ul>
    `;
  }
}

customElements.define("my-list", MyList);
