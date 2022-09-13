import buble from '@rollup/plugin-buble';

const config = {
  input: './src/index.js',
  output: {
    file: './dist/index.js',
    format: 'cjs',
    indent: false
  },
  plugins: [buble()],
};

export default config;
