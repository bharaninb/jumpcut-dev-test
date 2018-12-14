module.exports = {
  verbose: true,
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  collectCoverageFrom: [
    'src/**/*',
  ],
  setupFiles: [
    '<rootDir>/enzyme.config.js',
  ],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/../../node_modules/jest-css-modules',
  },
};
