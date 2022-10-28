import { LitElement, html } from "lit";
import "../../components/card-detail/card-detail";
import styles from "./book-detail.styles";

class BookDetailView extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      item: { type: Object },
    };
  }

  constructor() {
    super();
    this.item = [];
  }

  onClick() {
    this.dispatchEvent(new CustomEvent("arrow-back", { detail: "/" }));
  }

  render() {
    return html`
      <div class="container-view">
        <div class="container-arrow-back" @click=${this.onClick}>
          <img
            class="arrow-back"
            src="../assets/back-arrow.png"
            alt="arrow-back"
          />
          <span>Atrás</span>
        </div>
        <card-detail-component .item=${this.item}></card-detail-component>
      </div>
    `;
  }
}

customElements.define("book-detail-view", BookDetailView);
