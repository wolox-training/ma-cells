import { LitElement, html } from "lit";
import "../../components/card/card";
import styles from "./book-list.styles";

class BookListView extends LitElement {
  static get styles() {
    return [styles];
  }

  onNavigate = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName)
  }

  render() {
    return html`
      <div class="container-book-list">
        ${this.data.map(
          (item) => html` <card-component @click=${()=>this.onNavigate('/book-detail')} .item=${item}></card-component> `
        )}
      </div>
    `;
  }
}

customElements.define("book-list-view", BookListView);
