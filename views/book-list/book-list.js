import { LitElement, html } from "lit";
import "../../components/card/card";
import styles from "./book-list.styles";

class BookListView extends LitElement {
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

  onClick(item) {
    let event = new CustomEvent("book-clicked", {
      detail: item.title,
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="container-book-list">
        ${this.data.map(
          (item) =>
            html`
              <card-component
                @click=${() => this.onClick(item)}
                .item=${item}
              ></card-component>
            `
        )}
      </div>
    `;
  }
}

customElements.define("book-list-view", BookListView);
