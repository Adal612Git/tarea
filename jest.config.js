/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  coverageDirectory: './coverage',
  collectCoverage: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  reporters: ['default', ['jest-junit', { outputName: 'junit.xml' }]],
};
