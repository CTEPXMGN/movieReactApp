module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        'plugin:import/recommended',
        'airbnb',
        'prettier',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react-hooks', 'react'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
        'react/prop-types': 0,
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
            { allow: 'as-needed' },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
    },
};
