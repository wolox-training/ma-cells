import { LitElement, html } from 'lit'
import styles from './card.styles';

class CardComponent extends LitElement {

    static get styles(){
        return [styles];
      }
      
    render() {
        return html`
        <div class="container-book-list">
            <a href="./index.html">
                <div class="card">
                    <img class="img-book" src="./assets/book-cover.png" alt="img-book" />
                    <h3 class="title-book">Título del libro</h3>
                    <span class="author">Autor del libro</span>
                </div>
            </a>
        </div>
        `
    }
}

customElements.define('card-component', CardComponent)