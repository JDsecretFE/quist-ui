module.exports = function (wallaby) {
	return {
		files: [
			'source/**/*.js'
		],
		tests: [
			'test/**/*.js'
		],
		env: {
			type: 'node'
		},
		compilers: {
			'**/*.js': wallaby.compilers.babel()
		},
		testFramework: 'ava',
		debug: true
	};
};
