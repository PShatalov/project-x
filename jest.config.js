const path = require("path");
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  rootDir: path.resolve(__dirname),
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(t|j)s$": [
      "ts-jest",
      {
        diagnostics: false,
      },
    ],
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFiles: ["<rootDir>/test/setup/setup.ts"],
  testTimeout: 100000,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src' }),
};
