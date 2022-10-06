import { LitElement, html } from "lit";
import styles from "./card.styles";

class CardComponent extends LitElement {
  static get styles() {
    return [styles];
  }

  render() {
    console.log(this.data);
    return html`
      <div class="container-book-list">
        ${this.data.map(
          (item) => html`
            <div class="card">
              <div class="image">
                <img
                  class="img-book"
                  src="./assets/book-cover.png"
                  alt="img-book"
                />
              </div>
              <div class="text">
                <h3 class="title-book">${item.book_title}</h3>
                <span class="author">${item.author}</span>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define("card-component", CardComponent);
