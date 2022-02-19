const path = require('path');

module.exports = {
  preset: 'react-native',
  clearMocks: true,
  timers: 'fake',
  setupFilesAfterEnv: ['./jest.setup.js', 'jest-extended/all'],
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/android/',
    '<rootDir>/ios/',
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(@react-native|react-native|@react-native-community)/).*/',
  ],
  transform: {
    '^.+\\.(js|ts|tsx)$': [
      'babel-jest',
      {configFile: require.resolve('./babel.config.js')},
    ],
  },
};
