import { defineConfig } from "vite";
import { resolve } from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

const __dirname = new URL(".", import.meta.url).pathname;

export default defineConfig({
  plugins: [dts({ include: ["src/lib"] }), libInjectCss(), react()],
  server: { port: 3000 },
  build: {
    copyPublicDir: false,
    cssCodeSplit: true,
    lib: {
      entry: {
        components: resolve(__dirname, "src/lib/index.ts"),
        // this is styling that we want just to be output as CSS, not injected into the page.
        // consuming packages can import this if they want or not.
        tableCss: resolve(__dirname, "src/lib/entry/scss-to-copy.scss"),
      },
      fileName: "vite-storybook-lib",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: { globals: { react: "React", "react-dom": "ReactDOM" } },
    },
  },
});
