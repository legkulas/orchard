const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
// Temporary workaround for 'browserslist' bug that is being patched in the near future
const target = process.env.NODE_ENV === 'production' ? 'browserslist' : 'web';

module.exports = {
    // mode defaults to 'production' if not set
    mode: mode,

    // entry not required if using `src/index.js` default
    entry: {
        bundle: path.resolve(__dirname, './src/index.js'),
    },

    // output not required if using `dist/main.js` default
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: 'images/[name][ext]',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Orchard FED Test',
            filename: 'index.html',
            template: 'src/template.html',
        }),
        new MiniCssExtractPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [autoprefixer],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
            },
        ],
    },

    // defaults to "web", so only required for webpack-dev-server bug
    target: target,
    devtool: 'source-map',

    // required if using webpack-dev-server
    devServer: {
        contentBase: './dist',
        port: 3000,
        hot: false,
        compress: true,
        historyApiFallback: true,
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};
