module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './packages/*/tsconfig.json'],
  },
  plugins: ['react-hooks', '@typescript-eslint'],
  ignorePatterns: ['packages/icons'],
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['error', 'warn'],
      },
    ],
    'no-constant-binary-expression': 'error',
    "no-use-before-define": "off",
    'object-shorthand': ['error', 'always', {
      avoidQuotes: true
    }],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],

    'react-hooks/exhaustive-deps': 'error',

    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': ['error'],
    '@typescript-eslint/member-ordering': ['warn'],
    '@typescript-eslint/no-empty-function': ['error', {
      allow: ['arrowFunctions']
    }],
    '@typescript-eslint/no-redundant-type-constituents': ['warn'],
    '@typescript-eslint/no-this-alias': 'off',
    "@typescript-eslint/no-use-before-define": "warn",
    '@typescript-eslint/prefer-optional-chain': ['error'],
  },
  }
