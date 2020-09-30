const kind = process.env.NODE_ENV == "production" ? "production.min" : "development";

module.exports = {
	watchDirs: [
		"./app"
	],
	js: [{
		source: "./app/index.jsx",
		target: "./dist/index.js",
		jsx: true,
		esnext: {exclude: ["*"]},
		externals: {
			react: "React",
			"react-dom": "ReactDOM",
		}
	}],
	static: [
        {
            source: `react/umd/react.${kind}.js`,
            target: "./dist/react.js",
        },
        {
            source: `react-dom/umd/react-dom.${kind}.js`,
            target: "./dist/react-dom.js",
        }
    ],
	manifest: {
        target: "./manifest.json",
        key: "short",
        baseURI: "/static/",
        webRoot: "./dist"
    }
};
