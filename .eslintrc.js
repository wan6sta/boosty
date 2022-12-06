module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: './',
    project: [
      './tsconfig.json'
    ]
  },
  plugins: [
    'react',
    'i18next'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'i18next/no-literal-string': 2
  }
}
