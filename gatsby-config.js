/* eslint-env node */
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: 'Gatsby Tutorial',
		description: 'some random description',
		author: '@johndoe',
		data: ['item1', 'item2'],
		person: { name: 'peter', age: 32 },
	},
	plugins: [
		'gatsby-plugin-eslint',
		'gatsby-plugin-styled-components',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `${__dirname}/src/images/`,
			},
		},
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: 'bz6j1b8fwmhj',
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.ACCESS_TOKEN,
			},
		},
	],
};
