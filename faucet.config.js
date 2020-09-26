module.exports = {
	watchDirs: [
		"./app"
	],
	js: [{
		source: "./app/index.jsx",
		target: "./dist/index.js",
		jsx: true,
		esnext: {exclude: ["*"]}
	}],
	manifest: {
        target: "./manifest.json",
        key: "short",
        baseURI: "/static/",
        webRoot: "./dist"
    }
};
