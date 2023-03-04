module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  modulePaths: ['node_modules', '<rootDir>/src'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.*\\.(ts|tsx)$': 'ts-jest'
  }
}
