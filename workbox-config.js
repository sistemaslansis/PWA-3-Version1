module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,eot,ttf,woff,woff2,png,svg,gif,jpg,html,js,txt,json,php,md,scss}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};