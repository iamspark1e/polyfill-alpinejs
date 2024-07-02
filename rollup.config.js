import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
    input: "index.js",
    output: {
        format: "iife",
        file: "dist/alpine.min.js"
    },
    plugins: [
        commonjs(),
        nodeResolve(),
        babel({
            babelHelpers: "runtime",
            // exclude: 'node_modules/**',
            "presets": [
                [
                    "@babel/preset-env",
                    {
                        "loose": true,
                        targets: {
                            "browsers": ["since 2018"]
                        }
                    }
                ]
            ],
            "plugins": [
                "@babel/plugin-transform-runtime",
            ]
        }),
        terser()
    ]
}

export default config;