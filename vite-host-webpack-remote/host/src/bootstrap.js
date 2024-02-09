import { loadRemoteModule } from "@softarc/native-federation";;

(async () => {
	const remote = await loadRemoteModule('remote', './app');
	document.body.appendChild(remote);
})();
