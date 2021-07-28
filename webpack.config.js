const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app/main.ts",
    devtool: "source-map",
    optimization: {
        minimize: false
    },
    output: {
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            minify: false
        }),
        new CopyPlugin({
            patterns: [
                { from: "templates/*", to: "./", context: "src/" }
            ]
        })
    ],
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".js"]
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" },
            { test: /\.css$/, use: [ "style-loader", "css-loader" ] },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.#]+)?$/, loader: "file-loader" }
        ]
    }
};
