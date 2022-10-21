import { LitElement, html } from "lit";
import styles from "./nav-bar.styles";

class HeaderComponent extends LitElement {
  static get styles() {
    return [styles];
  }

  onClick() {
    this.dispatchEvent(new CustomEvent("bootom-logout", { detail: "/" }));
  }

  render() {
    return html`<div class="navbar">
      <img src="./assets/LogoWolox-Original.png" alt="" />
      <span class="logout" @click=${this.onClick}>Logout</span>
    </div> `;
  }
}

customElements.define("header-component", HeaderComponent);
