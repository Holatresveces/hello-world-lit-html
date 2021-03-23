import { LitElement, html } from "lit-element";
import "./helloWorld";
import "./myList";

class MyApp extends LitElement {
  static get properties() {
    return {
      list: { type: Array },
    };
  }

  constructor() {
    super();
    this.list = [
      { name: "Paquita Cabeza" },
      { name: "Lalo" },
      { name: "René" },
      { name: "Antonio" },
      { name: "Erick" },
      { name: "Rafael" },
    ];
  }

  render() {
    return html`
      <hello-world></hello-world>
      <my-list .list=${this.list}></my-list>
    `;
  }
}

customElements.define("my-app", MyApp);
