import { LitElement, html } from "lit";
import styles from "./card.styles";

class CardComponent extends LitElement {
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
    this.item = {
      author: "Título del libro",
      book_title: "Nombre del autor",
      img: "",
    };
  }

  render() {
    return html`
      <div class="card">
        <div class="image">
          <img class="img-book" src="${this.item.img}" alt="img-book" />
        </div>
        <div class="text">
          <h3 class="title-book">${this.item.book_title}</h3>
          <span class="author">${this.item.author}</span>
        </div>
      </div>
    `;
  }
}

customElements.define("card-component", CardComponent);
