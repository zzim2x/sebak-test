module.exports = {
  extends: 'airbnb-base',
  env: {
    mocha: true,
  },
  globals: {
    config: true,
  },
  plugins: [
    'mocha',
  ],
  rules: {
    'mocha/no-exclusive-tests': 'error',
  },
};
