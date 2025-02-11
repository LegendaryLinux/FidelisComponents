const path = require('path');

module.exports = {
	entry: {
		index: './src/AutoComplete.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|es6)$/,
				loader: 'babel-loader',
				options: {
					compact: true,
					minified: true,
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
				],
			},
			{
				test: /\.(s[a|c]ss)$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				],
			},
		]
	},
	output: {
		path: path.resolve(__dirname),
		filename: "[name].js",
		libraryTarget: 'commonjs2',
	}
};
