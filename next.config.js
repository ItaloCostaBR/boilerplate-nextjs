/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'picsum.photos',
				port: '',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '',
			},
		],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, '/src')],
		silenceDeprecations: ['legacy-js-api'],
		quietDeps: true,
	},
}

module.exports = nextConfig
