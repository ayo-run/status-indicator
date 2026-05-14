import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'unplugin-dts/vite'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(import.meta.dirname, 'src/status-indicator.js'),
            name: 'StatusIndicator',
            fileName: 'status-indicator',
            formats: ['es']
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
    },
    plugins: [dts()]
})