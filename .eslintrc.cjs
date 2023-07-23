/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
module.exports = {
    root: true,

    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        "plugin:prettier/recommended",
    ],
    ignorePatterns: ['dist', 'node_modules'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        "prettier/prettier": [
            "error",
            {
              "singleQuote": true,
              "parser": "typescript"
            }
          ],
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off",
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-unused-vars': 'error',
        'no-undef': 'error',
        'no-unused-expressions': 'error',
        'no-unreachable': 'error',
        'no-console': 'warn',
    },
};
