export default {
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  testMatch: ["**/*.spec.ts"],
  moduleNameMapper: {
    "^@src/(.*)": "<rootDir>/src/$1",
    "^@modules/(.*)": "<rootDir>/src/modules/$1",
    "^@shared/(.*)": "<rootDir>/src/shared/$1",
  },
};
