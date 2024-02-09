// vite.config.js
import { createEsBuildAdapter } from "file:///Users/kkimberg/github/federation-compatibility/webpack-host-vite-remote/remote/node_modules/.pnpm/@softarc+native-federation-esbuild@2.0.8/node_modules/@softarc/native-federation-esbuild/src/index.js";
import { defineConfig } from "file:///Users/kkimberg/github/federation-compatibility/webpack-host-vite-remote/remote/node_modules/.pnpm/vite@4.5.2/node_modules/vite/dist/node/index.js";
import { federation } from "file:///Users/kkimberg/github/federation-compatibility/webpack-host-vite-remote/remote/node_modules/.pnpm/@module-federation+vite@0.2.8_@softarc+native-federation@2.0.8/node_modules/@module-federation/vite/lib/index.cjs";
var __vite_injected_original_dirname = "/Users/kkimberg/github/federation-compatibility/webpack-host-vite-remote/remote";
var vite_config_default = defineConfig(async ({ command }) => ({
  plugins: [
    await federation({
      options: {
        workspaceRoot: __vite_injected_original_dirname,
        outputPath: "dist",
        tsConfig: "tsconfig.json",
        federationConfig: "module-federation/federation.config.cjs",
        verbose: true,
        dev: command === "serve"
      },
      adapter: createEsBuildAdapter({
        plugins: []
      })
    })
  ]
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva2tpbWJlcmcvZ2l0aHViL2ZlZGVyYXRpb24tY29tcGF0aWJpbGl0eS93ZWJwYWNrLWhvc3Qtdml0ZS1yZW1vdGUvcmVtb3RlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMva2tpbWJlcmcvZ2l0aHViL2ZlZGVyYXRpb24tY29tcGF0aWJpbGl0eS93ZWJwYWNrLWhvc3Qtdml0ZS1yZW1vdGUvcmVtb3RlL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9ra2ltYmVyZy9naXRodWIvZmVkZXJhdGlvbi1jb21wYXRpYmlsaXR5L3dlYnBhY2staG9zdC12aXRlLXJlbW90ZS9yZW1vdGUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBjcmVhdGVFc0J1aWxkQWRhcHRlciB9IGZyb20gJ0Bzb2Z0YXJjL25hdGl2ZS1mZWRlcmF0aW9uLWVzYnVpbGQnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBmZWRlcmF0aW9uIH0gZnJvbSAnQG1vZHVsZS1mZWRlcmF0aW9uL3ZpdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoYXN5bmMgKHsgY29tbWFuZCB9KSA9PiAoe1xuXHRwbHVnaW5zOiBbXG5cdFx0YXdhaXQgZmVkZXJhdGlvbih7XG5cdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdHdvcmtzcGFjZVJvb3Q6IF9fZGlybmFtZSxcblx0XHRcdFx0b3V0cHV0UGF0aDogJ2Rpc3QnLFxuXHRcdFx0XHR0c0NvbmZpZzogJ3RzY29uZmlnLmpzb24nLFxuXHRcdFx0XHRmZWRlcmF0aW9uQ29uZmlnOiAnbW9kdWxlLWZlZGVyYXRpb24vZmVkZXJhdGlvbi5jb25maWcuY2pzJyxcblx0XHRcdFx0dmVyYm9zZTogdHJ1ZSxcblx0XHRcdFx0ZGV2OiBjb21tYW5kID09PSAnc2VydmUnLFxuXHRcdFx0fSxcblx0XHRcdGFkYXB0ZXI6IGNyZWF0ZUVzQnVpbGRBZGFwdGVyKHtcblx0XHRcdFx0cGx1Z2luczogW11cblx0XHRcdH0pXG5cdFx0fSlcblx0XVxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErWixTQUFTLDRCQUE0QjtBQUNwYyxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGtCQUFrQjtBQUYzQixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWEsT0FBTyxFQUFFLFFBQVEsT0FBTztBQUFBLEVBQ25ELFNBQVM7QUFBQSxJQUNSLE1BQU0sV0FBVztBQUFBLE1BQ2hCLFNBQVM7QUFBQSxRQUNSLGVBQWU7QUFBQSxRQUNmLFlBQVk7QUFBQSxRQUNaLFVBQVU7QUFBQSxRQUNWLGtCQUFrQjtBQUFBLFFBQ2xCLFNBQVM7QUFBQSxRQUNULEtBQUssWUFBWTtBQUFBLE1BQ2xCO0FBQUEsTUFDQSxTQUFTLHFCQUFxQjtBQUFBLFFBQzdCLFNBQVMsQ0FBQztBQUFBLE1BQ1gsQ0FBQztBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0Y7QUFDRCxFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
