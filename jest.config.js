module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts'
  ],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy'
  },
  modulePaths: ['node_modules', '<rootDir>/src'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.*\\.(ts|tsx)$': 'ts-jest'
  }
}
