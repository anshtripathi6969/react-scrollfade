import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => {
    // Check if we are building on Vercel (where we want to deploy the demo app)
    const isVercel = process.env.VERCEL === '1';

    if (isVercel) {
        return {
            plugins: [react()],
        };
    }

    // Otherwise, build the library
    return {
        plugins: [
            react(),
            dts({ include: ['src/components', 'src/index.ts'] })
        ],
        build: {
            lib: {
                entry: resolve(__dirname, 'src/index.ts'),
                name: 'ScrollFade',
                fileName: (format) => `scrollfade.${format}.js`,
            },
            rollupOptions: {
                external: ['react', 'react-dom'],
                output: {
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM'
                    }
                }
            }
        }
    };
});
