module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'jsx-control-statements',
    '@babel/plugin-transform-named-capturing-groups-regex',
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          screens: './src/screens',
          api: './src/api',
          services: './src/services',
          constants: './src/constants',
          components: './src/components',
          test: './src/test',
          assets: './src/assets',
          utils: './src/utils',
        },
      },
    ],
  ],
};
