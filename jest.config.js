const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./"
});

// @type {import{'jest'}.Config}

const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
}


module.exports = createJestConfig(config)