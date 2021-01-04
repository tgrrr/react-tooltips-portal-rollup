import analyze from 'rollup-plugin-analyzer';
import babel from '@rollup/plugin-babel';
import path from 'path';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const dist = 'dist'
const NODE_ENV = process.env.NODE_ENV || "development";
const outputFile = NODE_ENV === "production" ? "prod" : "dev";
const production = !process.env.ROLLUP_WATCH
const development = !production


const config = {
	input: 'src/index.js',
	output: {
		file: `${dist}/${outputFile}.bundle.js`,
		exports: 'named',
		format: 'cjs',
		sourcemap: true,
	},
	external: ['react', 'react-dom'],
	plugins: [
		analyze({
			summaryOnly: true,
		}),
		development && serve({
			open: true,
			verbose: true,
			contentBase: ['', dist],
			historyApiFallback: true,
			host: 'localhost',
			port: 8080
		}),
		development && livereload({
			watch: dist
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
			minimize: production
		}),
		production && terser()
	]
};

export default config;