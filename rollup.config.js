import analyze from 'rollup-plugin-analyzer';
import babel from '@rollup/plugin-babel';
import path from 'path';
import postcss from 'rollup-plugin-postcss';

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
		analyze({
			summaryOnly: true,
		}),
		babel({ 
			babelHelpers: 'bundled',
			exclude: 'node_modules/**'
		}),
		postcss({
			extract: true,
			extract: path.resolve('dist/style.css'),
			config: {
                path: './postcss.config.js'
            },
		})],
};

export default config;