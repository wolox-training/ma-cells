import { LitElement, html } from "lit";
import styles from "./card-detail.styles";

class CardDetailComponent extends LitElement {
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
      title: "Nombre del autor",
      image_url: "",
      editor: "Pocket",
      year: "año",
      genre: "género",
    };
  }

  render() {
    return html`
      <div class="container-card">
        <div class="container-image">
          <img class="img-book" src="${this.item.image_url}" alt="book-cover" />
          <img class="badge" src="../assets/badge.png" alt="badge" />
        </div>
        <div class="container-detail">
          <div class="title-book">
            <h1 class="title">${this.item.title}</h1>
            <span class="genre">(género)</span>
            <div class="border"></div>
          </div>
          <div class="name-author">
            <h3 class="subtitle">Autor del libro:</h3>
            <span class="text"> ${this.item.author}</span>
          </div>
          <div class="editorial-container">
            <h3 class="subtitle">Editorial:</h3>
            <span class="text"> ${this.item.editor}</span>
          </div>
          <div class="year">
            <h3 class="subtitle">Año de publicación:</h3>
            <span class="text"> ${this.item.year}</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("card-detail-component", CardDetailComponent);
