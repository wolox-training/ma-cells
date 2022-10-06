import { LitElement, html } from 'lit';
import './components/card/card';

class AppComp extends LitElement {

    render() {
        return html`
        <card-component></card-component>
    `;
    }
}

customElements.define('app-comp', AppComp);