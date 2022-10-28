import { LitElement, html } from "lit";
import styles from "./search.styles";

class SearchComponent extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      item: { type: Object },
      itemCopy: { type: Object },
    };
  }

  firstUpdated() {
    this.itemCopy = [...this.item];
  }

  handleChange() {
    const input = this.shadowRoot.querySelector("#search").value.toLowerCase();
    if (input.length > 0) {
      this.item = this.item.filter((book) => {
        return (
          book.author.toLowerCase().includes(input.toLowerCase()) ||
          book.title.toLowerCase().includes(input.toLowerCase())
        );
      });
    } else {
      this.item = this.itemCopy;
    }
    this.onKeyup();
  }

  onKeyup() {
    let event = new CustomEvent("search-keyup", {
      detail: this.item,
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="container-search">
        <input
          class="search"
          placeholder="Buscar por título del libro..."
          type="text"
          id="search"
          @keyup=${this.handleChange}
        />
        <button id="icon-button" @click=${this.onKeyup}>
          <img alt="icon" src="../../assets/icon.png" />
        </button>
      </div>
    `;
  }
}

customElements.define("search-component", SearchComponent);
