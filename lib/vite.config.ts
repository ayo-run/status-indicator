import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(import.meta.dirname, 'src/status-indicator.js'),
            name: 'StatusIndicator',
            fileName: 'status-indicator',
        },
        rolldownOptions: {
            external: ['web-component-base'],
            output: {
                globals: {
                    'WebComponent': 'WebComponent',
                    'html': 'html'
                }
            }
        }
    }
})