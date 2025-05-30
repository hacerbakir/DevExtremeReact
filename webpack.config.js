const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const glob = require('glob');

const isProduction = process.env.NODE_ENV === 'production';

const ENTRY_PATTERN = './Scripts/Pages/**/*.ts';
const OUTPUT_DIR = path.resolve(__dirname, 'wwwroot/assets');

function generateEntries() {
    const entries = {};
    const files = glob.sync(ENTRY_PATTERN);

    files.forEach((file) => {
        const relativePath = path.relative('./Scripts/Pages', file);
        const entryName = relativePath
            .replace(/\.ts$/, '')
            .replace(/[\/\\]/g, '_')
            .toLowerCase();

        entries[entryName] = ['./Scripts/global', `./${file}`];
    });
    return entries;
}

module.exports = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    entry: generateEntries(),
    output: {
        filename: '[name].js',
        path: OUTPUT_DIR,
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, // .css uzantılı dosyaları hedefle
                use: [
                    'style-loader', // CSS'i DOM'a ekler
                    'css-loader'    // CSS'i JavaScript modülüne dönüştürür
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource', // Webpack 5 ve sonrası için önerilen yol
            },
            {
                test: /\.wwwroot\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.wwwroot\.(png|svg|jpe?g|gif|webp|eot|woff2?|ttf|otf)$/i,
                type: 'asset'
            }
        ],
    },
    resolve: {
        alias: {
            'inferno': 'inferno/dist/index.dev.esm.js',
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        minimize: isProduction,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                        dead_code: true,
                        conditionals: true,
                        booleans: true,
                        sequences: true,
                        unused: true,
                        if_return: true,
                        join_vars: true
                    },
                    mangle: true
                }
            }),
            new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'node_modules/devextreme/dist/css/fonts', to: 'css/fonts' },
                { from: 'node_modules/devextreme/dist/css/icons', to: 'css/icons' },
                { from: 'node_modules/devextreme/dist/css/dx.fluent.saas.light.css', to: 'css' },
                { from: 'node_modules/devextreme/dist/css/dx.fluent.saas.dark.css', to: 'css' },
                { from: 'node_modules/bootstrap-icons/font/bootstrap-icons.css', to: 'css/icons' },
                { from: 'node_modules/bootstrap-icons/font/fonts', to: 'css/icons/fonts' },
                { from: 'Styles', to: 'css' },
            ]
        })
    ]
};