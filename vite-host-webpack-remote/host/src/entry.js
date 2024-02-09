import { initFederation } from "@softarc/native-federation";

(async () => {
	await initFederation({
		remote: 'http://localhost:5002/remoteEntry.js'
	});

	await import('./bootstrap.js');
})();
