
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
    name: 'csr',
    context: path.join(__dirname, 'client'),
    entry: './client.js',
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/static',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    plugins: [
                        'transform-react-jsx',
                        [
                            'react-css-modules',
                            {context : path.join(__dirname, 'client')}
                        ]
                    ]
                },   
                include: path.join(__dirname, 'client'),
                exclude: path.join(__dirname, 'node_modules'),
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    // 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                    'css-loader'
                ],
            },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
        ]
    },
    // stats: 'minimal'
};

const serverConfig = {
    name: 'ssr',
    context: path.join(__dirname, 'client'),
    entry: './server-render.js',
    output: {
        path: path.join(__dirname, 'assets'),
        publicPath: '/assets',
        filename: 'bundle-server.js',
        libraryTarget: 'commonjs2',
    },
    target: 'node',
    externals: nodeExternals(),
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    plugins: [
                        'transform-react-jsx',
                        [
                            'react-css-modules',
                            {context : path.join(__dirname, 'client')}
                        ]
                    ]
                },
                include: path.join(__dirname, 'client'),
                exclude: path.join(__dirname, 'node_modules'),
            },
            {
                test: /\.css$/,
                loaders: [
                    // 'style-loader',
                    'css-loader'
                    // 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ],
            },
            { test: /\.styl$/, loader: 'css-loader!stylus-loader' }
        ]
    },
}

module.exports = [clientConfig, serverConfig]