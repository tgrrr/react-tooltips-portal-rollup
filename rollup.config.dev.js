import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

const config = {
	input: 'src/index.js',
	output: {
		file: 'dist/bundle.js',
		exports: 'named',
		format: 'iife',
		sourcemap: true
	},
	plugins: [
		commonjs({
			include: ['node_modules/**']
		}),
		replace({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		nodeResolve({
			extensions: ['.js', '.jsx']
		 }),
		babel({
			babelHelpers: 'bundled',
		}),
		serve({
			open: true,
			verbose: true,
			contentBase: ['', 'dist'],
			historyApiFallback: true,
			host: 'localhost',
			port: 8080
		}),
		livereload({ watch: 'dist' }),
	],
};

export default config;