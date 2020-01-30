const ExtendedDefinePlugin = require('extended-define-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require('fs');
const path = require('path');

// generates the info of the build
const buildInfo = (_=>{
    const file = './buildinfo.json';
    const _rtn = JSON.parse(fs.readFileSync(file, 'utf8'));

    _rtn.buildID++;
    fs.writeFileSync(file, JSON.stringify(_rtn));

    return _rtn;
})()

const mode = buildInfo.dev ? 'development' : 'production';
const assetLoader = {loader: "file-loader", options: {
    name: '[hash].[ext]',
    outputPath: "assets" 
}};

// main config
module.exports = {
    mode,

    entry: {
        app: "./src/engine/entry.tsx",
    },
    output: {
        filename: "[name]_[hash].js",
        path: path.join(__dirname, 'dist'),
    },

    devtool: "source-map",

    devServer: {
        // when BrowserRouter then: historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 3000
    },
    
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new ExtendedDefinePlugin({
            __DEF: {
                'buildInfo': buildInfo
            }
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: buildInfo.dev,
            hash: true,
            showErrors: buildInfo.dev,
        }),
    ],

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // SASS
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},

            // SVG
            { test: /\.svg$/, use:[ assetLoader, "./webpack_exts/svgo-loader.js"] },

            // JPG
            { test: /\.jpe?g$/, use:[ assetLoader ]},

            // PNG
            { test: /\.png$/, use:[ assetLoader ]},

            // HTML
            { test: /\.html$/, use:[ "html-loader" ]},
        ]
    },
};