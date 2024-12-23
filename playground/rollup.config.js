import clear from 'rollup-plugin-clear'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
// eslint-disable-next-line antfu/no-import-dist
import Embed from '../dist/rollup.js'

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.mjs',
        format: 'es',
        sourcemap: true,
      },
      {
        file: 'dist/index.js',
        exports: 'default',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      Embed(),
      commonjs(),
      resolve(),
      babel({
        babelHelpers: 'runtime',
        include: ['core-js/**', 'src/**'],
      }),
      clear({
        targets: ['dist'],
      }),
    ],
  },
]
