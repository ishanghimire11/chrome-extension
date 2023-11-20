const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: {
        popup: path.resolve("./src/popup/popup.tsx"),
        options: path.resolve("./src/options/options.tsx"),
        background: path.resolve("./src/background/background.ts"),
        content_scripts:path.resolve("./src/content-scripts/content_scripts.ts") 
    },
    module: {
        rules: [
            {
                use: "ts-loader",
                test: /\.tsx$/,
                exclude: /node_modules/
            },
            {
                use: ["style-loader", "css-loader", {
                    loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [tailwindcss, autoprefixer],
                            },
                        },
                }],
                test: /\.css$/,
            },
            {
                type: 'assets/resource',
                test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
            },
        ]
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            { from: path.resolve("src/assets"), to: path.resolve("dist") }
          ],
        }),
        ...getHtmlPlugins([
            "popup",
            "options",
            "background",
            "content-scripts"
        ])
      ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    output: {
        filename: "[name].js"
    }
};

function getHtmlPlugins(chunks) {
    return chunks.map(chunk => new HtmlWebpackPlugin({
        title: 'React Extension',
        filename: `${chunk}.html`,
        chunks: [chunk]
    }))
}
