const path = require('path');

module.exports = {
    entry:  './src',

    output: {
        filename: 'bundle.js',
        path: path.resolve(process.cwd(), 'build')
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',

                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        'postcss-loader'
                    ]
                }),
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',

                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                sourceMap: true,
                                importLoaders: 2,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        'sass-loader'
                    ]
                }),
            },
        ],
    }
};