const { shareAll, withNativeFederation } = require('@softarc/native-federation/build');

module.exports = withNativeFederation({
	name: 'webpackRemote',
	exposes: {
		'./app': './src/app.js'
	},
	shared: {
		...shareAll({
			singleton: true,
			strictVersion: true,
			requiredVersion: "auto",
			includeSecondaries: false,
		})
	}
});
