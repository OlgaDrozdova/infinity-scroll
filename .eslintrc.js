module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "google", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    camelcase: "warn",
  },
};
