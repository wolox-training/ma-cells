import { LitElement, html } from "lit";
import "./views/book-list/book-list";
import "./views/book-detail/book-detail";
import data from "./api/api.json" assert { type: "json" };

class AppComp extends LitElement {

  render() {
    return html` <book-list-view .data=${data}></book-list-view> `;
  }
}

customElements.define("app-comp", AppComp);
