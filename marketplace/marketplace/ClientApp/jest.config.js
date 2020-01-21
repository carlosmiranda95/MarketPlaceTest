// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,jsx}"],
  testMatch: ["<rootDir>/src/**/*.{js,jsx}"],
  testEnvironment: "node"
};
