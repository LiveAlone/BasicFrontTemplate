module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  extends: ['standard', 'eslint:recommended'],
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    'html', 'vue'
  ],
  rules: {
    'array-bracket-spacing': 2,
    'arrow-body-style': 2,
    'callback-return': 0,
    'comma-spacing': 2,
    'func-names': 0,
    'init-declarations': 2,
    'key-spacing': 2,
    'max-len': 0,
    'max-statements': 0,
    'no-multiple-empty-lines': 2,
    'no-negated-condition': 0,
    'no-shadow': 0,
    'no-var': 0,
    'object-shorthand': 0,
    'operator-assignment': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 0,
    'prefer-destructuring': 0,
    'prefer-template': 0,
    'require-jsdoc': 0,
    'array-callback-return': 2,
    'consistent-return': 2,
    'dot-notation': 2,
    'no-else-return': 0,
    'no-empty-function': 2,
    'no-eq-null': 2,
    'no-invalid-this': 0,
    'no-param-reassign': 0,
    'no-self-compare': 2,
    'vars-on-top': 0,
    'no-prototype-builtins': 0,
    'valid-jsdoc': 0,
    camelcase: 2,
    eqeqeq: 2,
    curly: 2,
    indent: [2, 2],
    quotes: [2, 'single'],
    semi: [2, 'always'],
    'space-infix-ops': 2,
    'comma-dangle': 1,
    'no-undef': 1,
    'global-strict': 0,
    'no-extra-semi': 1,
    'no-underscore-dangle': 0,
    'no-unused-vars': 1,
    'no-trailing-spaces': [1, { 'skipBlankLines': true }],
    'no-unreachable': 1,
    'no-alert': 0,
    'brace-style': [2, '1tbs'],
    'block-scoped-var': 2,
    'generator-star-spacing': 0,
    'no-extra-parens': 2,
    'no-cond-assign': [2, 'always'],
    'linebreak-style': [2, 'unix'],
    'eol-last': 2,
    'padded-blocks': [2, 'never'],
    'object-curly-spacing': [2, 'always', { objectsInObjects: false }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
