import { WebComponent, html } from 'web-component-base'

class StatusIndicator extends WebComponent {
    static shadowRootInit: ShadowRootInit = {
        mode: 'closed'
    }

    static props = {
        status: 'default',
        pulse: false
    }

    #indicatorColor: any = {
        default: '216, 226, 233',
        active: '0, 149, 255',
        positive: '75, 210, 143',
        intermediary: '255, 170, 0',
        negative: '255, 77, 77'
    }

    #pulseAnimationCSSRules = {
        animationName: 'pulse',
        animationDuration: '2s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDelay: '0',
        animationFillMode: 'none'
    }

    get template(): any {
        const statusColor = this.#indicatorColor[this.props.status]

        return html`
            <div class="status-indicator-icon" style=${{
                display: 'inline-block',
                borderRadius: '50%',
                cursor: 'pointer',
                width: '0.5rem',
                height: '0.5rem',
                backgroundColor: `rgb(${statusColor})`,
                marginRight: '0.05rem',
                ...(this.props.pulse ? this.#pulseAnimationCSSRules : [])
            }}> </div>

            <span class="status-indicator-label"><slot></slot></span>

            ${
            /** if pulse is set, add animation keyframes */
            this.props.pulse ? html`
                <style>
                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(${statusColor}, 0.5);}
                    70% { box-shadow: 0 0 0 10px rgba(${statusColor}, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(${statusColor}, 0); }
                }
                </style>`
                :
                ''
            }`
    }
}

customElements.define('status-indicator', StatusIndicator)

export default StatusIndicator
