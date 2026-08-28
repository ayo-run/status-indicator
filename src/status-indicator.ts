import { WebComponent, html } from 'web-component-base'

type Status = 'default' | 'active' | 'positive' | 'intermediary' | 'negative'

type StatusProps = {
    status: Status,
    pulse: boolean
}

class StatusIndicator extends WebComponent<StatusProps> {
    static shadowRootInit: ShadowRootInit = {
        mode: 'closed'
    }

    static props: StatusProps = {
        status: 'default',
        pulse: false
    }

    // Both props reflect to attributes, so the color and the pulse animation
    // are driven entirely from CSS via `:host([status])` / `:host([pulse])` —
    static styles = `
        :host {
            --status-color: 216, 226, 233;
        }
        :host([status="active"]) { --status-color: 0, 149, 255; }
        :host([status="positive"]) { --status-color: 75, 210, 143; }
        :host([status="intermediary"]) { --status-color: 255, 170, 0; }
        :host([status="negative"]) { --status-color: 255, 77, 77; }

        .status-indicator-icon {
            display: inline-block;
            border-radius: 50%;
            cursor: pointer;
            width: 0.5rem;
            height: 0.5rem;
            background-color: rgb(var(--status-color));
            margin-right: 0.05rem;
        }

        :host([pulse]) .status-indicator-icon {
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(var(--status-color), 0.5); }
            70% { box-shadow: 0 0 0 10px rgba(var(--status-color), 0); }
            100% { box-shadow: 0 0 0 0 rgba(var(--status-color), 0); }
        }
    `

    get template(): any {
        return html`
            <div class="status-indicator-icon"> </div>
            <span class="status-indicator-label"><slot></slot></span>`
    }
}

customElements.define('status-indicator', StatusIndicator)

export default StatusIndicator
