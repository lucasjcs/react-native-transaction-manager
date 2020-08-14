module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
  ],
  coverageDirectory: '__tests__/coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['lib/', 'node_modules/'],

};
