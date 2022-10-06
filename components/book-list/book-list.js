import { LitElement, html } from "lit";
import "../card/card";
import styles from "./book-list.styles";

class BookListComponent extends LitElement {
  static get styles() {
    return [styles];
  }

  render() {
    return html`
      <div class="container-book-list">
        ${this.data.map(
          (item) => html`
            <div class="card">
              <card-component .item=${item}></card-component>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define("book-list-component", BookListComponent);
