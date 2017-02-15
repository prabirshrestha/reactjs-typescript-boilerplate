var path = require('path');
const Clean = require('clean-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const HTML = require('html-webpack-plugin');
const webpack = require('webpack');
const Dashboard = require('webpack-dashboard/plugin');

var root = __dirname;
var build = path.join(root, 'build');

var plugins = []
module.exports = env => {
    const isProd = env && env.production;

    return {
        entry: {
            app: './src/app',
            vendor: './src/vendor'
        },
        output: {
            path: build,
            filename: '[name].[hash].js',
            publicPath: '/'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            alias: {
                // you may need `preact-compat` instead!
                'react': 'preact/aliases',
                'react-dom': 'preact/aliases'
            }
        },
        module: {
            rules: [
                { test: /\.tsx?$/, use: ['awesome-typescript-loader'] },
            ]
        },
        plugins: [ /* prod and dev plugins */
            new Clean([build], { root }),
            new Copy([{ context: 'src/static/', from: '**/*.*' }]),
            new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development')
            }),
            new HTML({ template: 'src/index.html', minify: { collapseWhitespace: isProd } }),
        ].concat(isProd
            ? [ /* prod only plugins */
                new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
                new webpack.optimize.UglifyJsPlugin({
                    output: {
                    comments: 0
                    },
                    compress: {
                        unused: 1,
                        warnings: 0,
                        comparisons: 1,
                        conditionals: 1,
                        negate_iife: 0, // <- for `LazyParseWebpackPlugin()`
                        dead_code: 1,
                        if_return: 1,
                        join_vars: 1,
                        evaluate: 1
                    }
                })
            ]
            : [ /* dev only plugins */
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NamedModulesPlugin(),
                new Dashboard()
            ]
        ),
        devtool: !isProd && 'eval',
        devServer: {
            contentBase: build,
            port: process.env.PORT || 3000,
            historyApiFallback: true,
            compress: isProd,
            inline: !isProd,
            hot: !isProd
        }
    };
};
