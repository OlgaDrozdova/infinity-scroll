module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  extends: [
    'plugin:react/recommended',
    'google',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'import',
    'react-hooks',
    'no-loops',
    'jsx-a11y',
    'promise',
  ],
  rules: {
    'no-var': 'warn',
    'camelcase': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-loops/no-loops': 2,
    'object-curly-spacing': [2, 'always'],
    'react/prop-types': 'off',
  },
};
