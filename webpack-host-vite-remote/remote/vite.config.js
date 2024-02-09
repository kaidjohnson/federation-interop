import { createEsBuildAdapter } from '@softarc/native-federation-esbuild';
import { defineConfig } from 'vite';
import { federation } from '@module-federation/vite';

export default defineConfig(async ({ command }) => ({
	plugins: [
		await federation({
			options: {
				workspaceRoot: __dirname,
				outputPath: 'dist',
				tsConfig: 'tsconfig.json',
				federationConfig: 'module-federation/federation.config.cjs',
				verbose: true,
				dev: command === 'serve',
			},
			adapter: createEsBuildAdapter({
				plugins: []
			})
		})
	]
}));
