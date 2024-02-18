module.exports = {
  root: true,
  extends: ['airbnb-base', 'prettier'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ['prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-param-reassign': [2, { props: false }],
    'no-plusplus': 'off',
    'no-restricted-syntax': [2, 'WithStatement'],
    'max-len': ['error', 120],
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'no-new': 'off',
    'no-return-assign': 'off',
    'no-multi-assign': 'off',
  },
};
