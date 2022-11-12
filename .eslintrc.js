const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    'react-native/react-native': true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jsx-control-statements/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
    'react-hooks',
    'jsx-control-statements',
    'jest',
    'import',
  ],
  rules: {
    'react/jsx-filename-extension': [WARN, {extensions: ['.js', '.jsx']}],
    'react/function-component-definition': [
      ERROR,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'comma-dangle': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/jsx-no-undef': [ERROR, {allowGlobals: true}],
    'jsx-control-statements/jsx-for-require-body': OFF,
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
  },
};
