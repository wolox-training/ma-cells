import { LitElement, html } from "lit";
import styles from "./search.styles";

class SearchComponent extends LitElement {
  static get styles() {
    return [styles];
  }

  render() {
    return html`
      <div class="container-search">
        <input
          class="search"
          placeholder="Buscar por título del libro..."
          type="text"
        />

        <img alt="icon" src="../../assets/icon.png" />
      </div>
    `;
  }
}

customElements.define("search-component", SearchComponent);
