const path = require('path');

module.exports = {
	entry: {
		index: './src/Popover.js'
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
	externals: {
		react: 'commonjs react',
	},
	output: {
		path: path.resolve(__dirname),
		filename: "[name].js",
		libraryTarget: 'commonjs2',
	}
};
