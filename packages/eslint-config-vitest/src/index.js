module.exports = {
  env: {
    node: true,
  },
  plugins: ['vitest'],
  extends: ['plugin:vitest/recommended'],
  rules: {
    // allowing useless async functions in tests,
    // to make it easier to copy-paste test code
    'require-await': 'off',

    // https://github.com/veritem/eslint-plugin-vitest#rules

    'vitest/consistent-test-it': [2, { fn: 'it' }],
    'vitest/max-nested-describe': [2, { max: 4 }],
    'vitest/no-conditional-expect': [2],
    'vitest/no-conditional-in-test': [2],
    'vitest/no-conditional-tests': [2],
    'vitest/no-disabled-tests': [2],
    'vitest/no-done-callback': [2],
    'vitest/no-duplicate-hooks': [2],
    'vitest/no-focused-tests': [2],
    'vitest/no-mocks-import': [2],
    'vitest/no-standalone-expect': [2],
    'vitest/no-test-return-statement': [2],
    'vitest/prefer-comparison-matcher': [2],
    'vitest/prefer-expect-resolves': [2],
    'vitest/prefer-hooks-in-order': [2],
    'vitest/prefer-hooks-on-top': [2],
    'vitest/prefer-spy-on': [2],
    'vitest/prefer-to-be': [2],
    'vitest/prefer-to-be-object': [2],
    'vitest/prefer-to-contain': [2],
    'vitest/prefer-to-have-length': [2],
    'vitest/require-hook': [2],
    'vitest/require-top-level-describe': [2],
  },
}
