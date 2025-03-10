import eslintConfigLove from 'eslint-config-love';

export default [
  {
    ...eslintConfigLove,
    files: ['src/**/*.ts'],
    ignores: [
      "nim.ts",
      "nim_example.ts",
      "*.js",
      "out/**/*"
    ],
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: 'tsconfig.json'
      }
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "no-console": ["error", { allow: ["warn", "error"] }]
    }

  }
];