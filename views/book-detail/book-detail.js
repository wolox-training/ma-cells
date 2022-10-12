import { LitElement, html } from "lit";
import styles from "./book-detail.styles";

class BookDetailView extends LitElement {
  static get styles() {
    return [styles];
  }

  render() {
    return html`
      <div class="container-card">
        <div class="title-book">
          <h1 class="title">Título del libro</h1>
          <span class="genre">(género)</span>
        </div>
        <div class="imgAndDescrition">
          <div class="container-image">
            <img
              class="img-book"
              src="./assets/book-cover.png"
              alt="book-cover"
            />
            <img class="badge" src="./assets/badge.png" alt="badge" />
          </div>
          <div class="container-detail">
            <div class="title-book">
              <span class="genreTwo">(género)</span>
              <div class="border"></div>
            </div>
            <div class="name-author">
              <h3 class="subtitle">Autor del libro:</h3>
              <span class="text"> Nombre del autor del libro</span>
            </div>
            <div class="editorial-container">
              <h3 class="subtitle">Editorial:</h3>
              <span class="text"> Nombre de la editorial</span>
            </div>
            <div class="year">
              <h3 class="subtitle">Año de publicación:</h3>
              <span class="text"> Año de publicación</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("book-detail-view", BookDetailView);
