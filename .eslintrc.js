module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  plugins: [
    'react',
    'react-native',
    'react-hooks',
    'jsx-control-statements',
    'jest',
  ],
  extends: ['airbnb', 'prettier', 'plugin:jsx-control-statements/recommended'],
};
