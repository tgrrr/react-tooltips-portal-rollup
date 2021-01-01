import babel from '@rollup/plugin-babel';
const analyze = require('rollup-plugin-analyzer')

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
		analyze({
			summaryOnly: true,
		})		
	]
};

export default config;