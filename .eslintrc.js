module.exports = {
  root: true,
  env: {
    es6: true,
  },
  plugins: [
    'react',
    'react-native',
    'react-hooks',
    'jsx-control-statements',
    'jest',
    'import',
  ],
  extends: ['airbnb', 'prettier', 'plugin:jsx-control-statements/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    jsx: true,
    ecmaVersion: 2015,
  },
};
