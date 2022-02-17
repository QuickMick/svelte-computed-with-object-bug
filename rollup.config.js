import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-css-only";

export default {
  input: "index.js",
  output: {
    file: "./bundle.js",
    format: "iife",
    sourcemap: "inline",
  },
  plugins: [
    svelte({}),
    css({ output: "bundle.css" }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),
  ],
};
