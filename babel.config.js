module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'jsx-control-statements',
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          screens: './src/screens',
          api: './src/api',
        },
        transformFunctions: [
          'require',
          'require.resolve',
          'System.import',
          'jest.genMockFromModule',
          'jest.mock',
          'jest.unmock',
          'jest.doMock',
          'jest.dontMock',
          'jest.requireActual',
        ],
      },
    ],
  ],
};
