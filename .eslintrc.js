module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true
	},
	'extends': [
		'eslint:recommended',
    'plugin:react/recommended',
	],
	'parserOptions': {
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true,
			'jsx': true
		},
		'ecmaVersion': 2020,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': [
			'warn',
			'tab'
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
			'always'
		],
		'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'no-mixed-spaces-and-tabs': 'warn'
	},
};