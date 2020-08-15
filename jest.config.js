module.exports = {
  roots: ['<rootDir>'],
  coverageDirectory: '__tests__/coverage',
  preset: 'react-native',
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  moduleDirectories: [
    'node_modules',
  ],

  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native)/)',
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
  ],
};
