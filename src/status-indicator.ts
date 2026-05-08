import { WebComponent, html } from 'web-component-base'

class StatusIndicator extends WebComponent {
    static shadowRootInit: ShadowRootInit = {
        mode: 'closed'
    }

    static props = {
        status: 'default',
    }

    #indicatorColor: any = {
        default: [216, 226, 233],
        active: [0, 149, 255],
        positive: [75, 210, 143],
        intermediary: [255, 170, 0],
        negative: [255, 77, 77]
    }

    get template(): any {
        return html`
            <div style=${{
                display: 'inline-block',
                borderRadius: '50%',
                cursor: 'pointer',
                width: '10px',
                height: '10px',
                backgroundColor: `rgba(${this.#indicatorColor[this.props.status]})`
            }}
            ></div>
            <slot></slot>
        `
    }
}

customElements.define('status-indicator', StatusIndicator)

export default StatusIndicator