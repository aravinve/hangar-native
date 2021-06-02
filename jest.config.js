const { pathsToModuleNameMapper } = require("ts-jest/utils");
const fs = require("fs");

const jsConfigData = fs.readFileSync("./jsconfig.json");
const parsedJsConfig = JSON.parse(jsConfigData.toString());
const { paths } = parsedJsConfig.compilerOptions;

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
  moduleNameMapper: pathsToModuleNameMapper(paths, {
    prefix: "<rootDir>/src/",
  }),
};
