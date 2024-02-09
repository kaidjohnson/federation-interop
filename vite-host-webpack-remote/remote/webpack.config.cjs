const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	devServer: {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},
	entry: path.resolve(__dirname, 'src/entry.js'),
	output: {
		clean: true,
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack Remote'
		}),
		new webpack.container.ModuleFederationPlugin({
			name: 'remote',
			filename: 'remoteEntry.js',
			exposes: {
				'./app': './src/app.js'
			}
		})
	]
}
