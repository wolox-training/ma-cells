import { LitElement, html } from "lit";
import "./views/book-list/book-list";
import "./views/book-detail/book-detail";
import data from "./api/api.json" assert { type: "json" };

class AppComp extends LitElement {
  static get properties() {
    return {
      path: { attribute: false },
      item: { attribute: false },
    };
  }

  constructor() {
    super();
    this.path = window.location.pathname;
    this.item = {};
  }

  firstUpdated() {
    window.addEventListener("popstate", () => {
      this.path = window.location.pathname;
    });
    this.showDetail();
  }

  showDetail() {
    if (this.path !== "/") {
      this.item = this.getItem(this.path.replace("/", ""));
      if (!this.item) {
        window.location.pathname = "/";
      }
    }
  }

  bookClicked({ detail }) {
    this.item = this.getItem(detail);
    this.path = `/book-detail/${detail.replaceAll(" ", "-")}`;
    window.history.pushState({}, "", this.path);
  }

  getItem(name) {
    return data.find((item) => item.title === name);
  }

  arrowClicked({ detail }) {
    this.path = detail;
    window.history.pushState({}, "", this.path);
  }

  render() {
    return html`
      ${this.path === "/"
        ? html`<book-list-view
            @book-clicked=${this.bookClicked}
            .data=${data}
          ></book-list-view>`
        : html`
            <book-detail-view
              @arrow-back=${this.arrowClicked}
              .item=${this.item}
            ></book-detail-view>
          `}
    `;
  }
}

customElements.define("app-comp", AppComp);
