import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(import.meta.dirname, 'src/status-indicator.ts'),
            name: 'StatusIndicator',
            fileName: 'status-indicator',
        },
        rolldownOptions: {
            external: ['web-component-base'],
            output: {
                globals: {
                    'web-component-base': 'web-component-base',
                }
            },
        }
    },
    plugins: [dts()]
})