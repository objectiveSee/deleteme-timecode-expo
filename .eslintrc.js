module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'import',
        'unused-imports',
        'react-hooks'
    ],
    rules: {
        'no-unreachable': 2,
        'eol-last': 0,
        'no-trailing-spaces': 2,
        'object-curly-spacing': ['error', 'always'],
        "no-var": "error",
        "prefer-const": "error",
        "eqeqeq": ["error", "always"],
        "curly": ["error", "all"],

        // ##### Indentation #####
        'indent': ['error', 2],

        // ##### Empty Lines #####
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, 'maxBOF': 0 }],

        // ##### Importing #####
        // turn on errors for missing imports
        // TODO: Enable this
        // 'import/no-unresolved': 'error',
        // allow for named imports of default exports
        // 'import/no-named-as-default-member': 0,

        // ##### Import Order #####
        'sort-imports': [
            'error',
            {
            ignoreCase: false,
            ignoreDeclarationSort: true, // don"t want to sort import lines, use eslint-plugin-import instead
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            allowSeparatedGroups: true,
            },
        ],
        'import/order': [
            'error',
            {
            groups: [
                'builtin', // Built-in imports (come from NodeJS native) go first
                'external', // <- External imports
                'internal', // <- Absolute imports
                ['sibling', 'parent'], // <- Relative imports, the sibling and parent types they can be mingled together
                'index', // <- index imports
                'unknown', // <- unknown
            ],
            'newlines-between': 'always',
            alphabetize: {
                /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
                order: 'asc',
                /* ignore case. Options: [true, false] */
                caseInsensitive: true,
            },
            },
        ],

        // ##### Hooks #####
        "react-hooks/rules-of-hooks": "warn",
        "react-hooks/exhaustive-deps": "warn",

        // Disable rules to fit with default from Expo template
        '@typescript-eslint/explicit-function-return-type': 'off',
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/triple-slash-reference": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
    },
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json'
            },
        }
    }
}
