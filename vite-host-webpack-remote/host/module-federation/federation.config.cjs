const { shareAll, withNativeFederation } = require('@softarc/native-federation/build');

module.exports = withNativeFederation({
	name: 'viteHost',
	shared: {
		...shareAll({
			singleton: true,
			strictVersion: true,
			requiredVersion: "auto",
			includeSecondaries: false,
		})
	}
});
