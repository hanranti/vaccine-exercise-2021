module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
        "cypress/globals": true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        "eqeqeq": "error",
        "no-trailing-spaces": "error",
        "arrow-spacing": [
            "error", { "before": true, "after": true }
        ],
        "no-console": 0
    },
    'plugins': [
        'react', 'jest', 'cypress'
    ]
}
