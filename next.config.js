/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, '/src')],
		silenceDeprecations: ['legacy-js-api'],
		quietDeps: true,
	},
}

module.exports = nextConfig
