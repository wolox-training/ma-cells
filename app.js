import { LitElement, html } from "lit";
import "./components/card/card";
import data from './api/api.json' assert { type: "json" };

class AppComp extends LitElement {

  render() {
    return html` <card-component .data=${data}></card-component> `;
  }
}

customElements.define("app-comp", AppComp);
