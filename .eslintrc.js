module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  plugins: ['jsx-control-statements', 'jest'],
  extends: ['airbnb', 'prettier', 'plugin:jsx-control-statements/recommended'],
};
