import buble from '@rollup/plugin-buble';

export default {
  input: './src/index.js',
  output: {
    file: './dist/index.js',
    format: 'cjs',
    indent: false
  },
  plugins: [buble()],
};