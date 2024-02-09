const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	devServer: {
		open: true
	},
	entry: path.resolve(__dirname, 'src/entry.js'),
	output: {
		clean: true,
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack Host'
		}),
		new webpack.container.ModuleFederationPlugin({
			name: 'host',
			filename: 'remoteEntry.js',
			remotes: {
				remote: 'remote@http://localhost:5004/remoteEntry.json'
			}
		})
	]
}
