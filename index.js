module.exports = {
    'extends': [
        'stylelint-config-property-sort-order-smacss',
    ],
    "plugins": [
        "stylelint-use-nesting"
    ],
    'rules': {
        'max-nesting-depth': 4,
        'indentation': 4 | 'spaces',
        'string-quotes': 'single',
        'selector-max-id': 0,
        'block-opening-brace-space-before': 'always',
        'selector-nested-pattern': "^&:(?:hover|focus)$",

        'function-comma-space-after': 'always',
        'value-list-comma-space-after': 'always',
        'selector-list-comma-space-after': 'always',
        'media-query-list-comma-space-after': 'always',

        'declaration-block-trailing-semicolon': 'always',
        'function-url-quotes': 'always',

        'selector-class-pattern': '[a-zA-Z0-9]+',
        'declaration-block-single-line-max-declarations': 1,
        'selector-list-comma-newline-after': 'always',

        'color-no-hex': true,
        'color-named': 'never',
        'color-no-invalid-hex': true,
        'declaration-block-no-duplicate-properties': true,
        'property-no-vendor-prefix': true,
        'comment-no-empty': true,
        'no-empty-first-line': true,
        'block-no-empty': true,
        'declaration-no-important': true,

        'csstools/use-nesting': 'always',
        'no-duplicate-selectors': true,
        'function-calc-no-invalid': true,
        'selector-no-qualifying-type': true,
    }
};
