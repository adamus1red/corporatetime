const path = require('path');
var webpack = require("webpack");
const MomentTimezoneDataPlugin = require('moment-timezone-data-webpack-plugin');
const currentYear = new Date().getFullYear();

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            jquery: "../node_modules/jquery/src/jquery"
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new MomentTimezoneDataPlugin({
            startYear: currentYear - 5,
            endYear: currentYear + 5,
        }),
    ]
};