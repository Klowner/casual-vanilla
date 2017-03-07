var webpack = require('webpack'),
	UglifyJsPlugin = webpack.optimize.UglifyJsPlugin,
	env = process.env.WEBPACK_ENV,
	plugins = [],
	outputFile = 'casual-vanilla';

if (env === 'build') {
	plugins.push(new UglifyJsPlugin({minimize: true}));
	outputFile += '.min.js';
} else {
	outputFile += '.js';
}

module.exports = {
	entry: './src/casual.js',
	output: {
		path: __dirname + '/lib',
		filename: outputFile,
		library: 'casual',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	plugins: plugins
};
