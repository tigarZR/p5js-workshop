import ts from "rollup-plugin-ts";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
export default [
	{
		input: "src/simplepaint.ts",
		output: {
			file: "public/simplepaint/simplepaint.js",
			format: "cjs",
		},
		plugins: [ts(), resolve(), commonjs({ sourceMap: false })],
	},
	{
		input: "src/paint.ts",
		output: {
			file: "public/paint/paint.js",
			format: "cjs",
		},
		plugins: [ts(), resolve(), commonjs({ sourceMap: false })],
	},
	{
		input: "src/dvd.ts",
		output: {
			file: "public/dvd/dvd.js",
			format: "cjs",
		},
		plugins: [ts(), resolve(), commonjs({ sourceMap: false })],
	},
	{
		input: "src/bubbleSort.ts",
		output: {
			file: "public/bubblesort/bubblesort.js",
			format: "cjs",
		},
		plugins: [ts(), resolve(), commonjs({ sourceMap: false })],
	},
	{
		input: "src/YOUR_PROJECT.ts",
		output: {
			file: "public/yourproject/yourproject.js",
			format: "cjs",
		},
		plugins: [ts(), resolve(), commonjs({ sourceMap: false })],
	},
];
