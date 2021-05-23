module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleDirectories: ["node_modules"],
  preset: "react-native",
  testEnvironment: "node",
  transform: { "^.+\\.(ts|tsx)$": "ts-jest", "^.+\\.(js|jsx)$": "babel-jest" },
  transformIgnorePatterns: [],
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.{js,jsx}"],
  coveragePathIgnorePatterns: ["./src/ApiClient.js"],
};
