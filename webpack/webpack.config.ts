
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { Configuration } from 'webpack'
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';
import moduleFederationConfig from "./moduleFederation";

const config: Configuration = {
    entry: "./index.tsx",
    mode: "development",
    output: {
        publicPath: 'http://localhost:3000/'
    },
    devServer: {
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        moduleFederationConfig,
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, '../src'), // Caminho absoluto para a pasta src
          },
        extensions: [".js", ".jsx", ".ts", ".tsx", '.css'],
    },
    target: "web",
};

export default config