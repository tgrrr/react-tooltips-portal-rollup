import babel from '@rollup/plugin-babel';

const config = {
	input: 'src/index.js',
	output: {
		file: 'dist/bundle.js',
		exports: 'named',
		format: 'cjs'
	},
	external: [
		'react',
		],
	plugins: [
		babel({ 
			babelHelpers: 'bundled',
			exclude: 'node_modules/**'
		}),
	]
};

export default config;