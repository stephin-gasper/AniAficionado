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
          services: './src/services',
          constants: './src/constants',
        },
      },
    ],
  ],
};
