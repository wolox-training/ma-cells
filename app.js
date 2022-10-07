import { LitElement, html } from "lit";
import "./components/book-list/book-list";
import data from './api/api.json' assert { type: "json" };

class AppComp extends LitElement {

  render() {
    return html` <book-list-component .data=${data}></book-list-component> `;
  }
}

customElements.define("app-comp", AppComp);
