import { WebComponent, html } from 'web-component-base'
import stylesheet from './stylesheets'

console.log(stylesheet.cssRules)

class StatusIndicator extends WebComponent {
    get template(): any {
        return html`
            <slot></slot>
        `
    }
}

customElements.define('status-indicator', StatusIndicator)