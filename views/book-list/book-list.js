import { LitElement, html } from "lit";
import "../../components/card/card";
import "../../components/search/search";
import "../../components/nav-bar/nav-bar";
import styles from "./book-list.styles";

class BookListView extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      data: { type: Object },
    };
  }

  constructor() {
    super();
    this.data = [];
  }

  onClick(item) {
    let event = new CustomEvent("book-clicked", {
      detail: item.title,
    });
    this.dispatchEvent(event);
  }

  bottonLogout({ detail }) {
    this.path = detail;
    window.history.pushState({}, "", this.path);
  }

  onKeyup({ detail }) {
    this.data = detail;
  }

  render() {
    return html`
      <div class="container">
        <header-component
          class="header"
          @bootom-logout=${this.bottonLogout}
        ></header-component>
        <div>
          <search-component
            @search-keyup=${this.onKeyup}
            .item=${this.data}
          ></search-component>
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
        </div>
      </div>
    `;
  }
}

customElements.define("book-list-view", BookListView);
