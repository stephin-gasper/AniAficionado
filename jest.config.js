const path = require('path');

module.exports = {
  preset: 'react-native',
  clearMocks: true,
  timers: 'fake',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  setupFilesAfterEnv: ['./jest.setup.js', 'jest-extended/all'],
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/android/',
    '<rootDir>/ios/',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  transform: {
    '^.+\\.(js|ts|tsx)$': [
      'babel-jest',
      {configFile: require.resolve('./babel.config.js')},
    ],
  },
};
