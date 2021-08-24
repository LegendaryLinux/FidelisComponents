const path = require('path');

module.exports = {
	entry: {
		index: './src/js/FancyCheckbox.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|es6)$/,
				loader: 'babel-loader',
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
