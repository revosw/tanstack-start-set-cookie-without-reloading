import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		tailwindcss(),
		// tailwindcss(), sentry(), ...
		tanstackStart({
			/** Add your options here */
			customViteReactPlugin: true,
		}),
		react(),
	],
});
