module.exports = {
  rules: {
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/attribute-hyphenation': ['error', 'never', { ignore: [] }],
    'vue/attributes-order': ['error', { alphabetical: true }],
    'vue/block-order': [
      'error',
      {
        order: [
          'script:not([setup])',
          'script[setup]',
          'template',
          'style:not([scoped])',
          'style[scoped]',
        ],
      },
    ],
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      { registeredComponentsOnly: false },
    ],
    'vue/dot-location': ['error', 'property'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/multi-word-component-names': 'error',
    'vue/no-boolean-default': ['error', 'default-false'],
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-mutating-props': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/order-in-components': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/v-on-function-call': 'error',
    'vue/v-slot-style': [
      'error',
      {
        atComponent: 'v-slot',
        default: 'v-slot',
        named: 'longform',
      },
    ],
    'vue/valid-v-slot': 'error',
  },
}
