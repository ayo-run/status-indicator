import { WebComponent, html } from 'web-component-base'

class StatusIndicator extends WebComponent {
    get template(): any {
        return html`
            <h1>Hello, World!</h1>
        `
    }
}

customElements.define('status-indicator', StatusIndicator)