import { WebComponent, html } from 'web-component-base'

class HelloWorld extends WebComponent {
    get template(): any {
        return html`
            <h1>Hello, World!</h1>
        `
    }
}