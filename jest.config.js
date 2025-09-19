const path = require('path')

module.exports = {
	rootDir: path.resolve(__dirname),
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		'^.+\\.(t|j)s$': [
			'ts-jest',
			{
				diagnostics: false,
			},
		],
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	globalSetup: '<rootDir>/test/setup/setup.ts',
	testTimeout: 100000,
}
