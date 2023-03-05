module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'google', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'import'],
  rules: {
    'no-var': 'warn',
    camelcase: 'warn',
  },
};
