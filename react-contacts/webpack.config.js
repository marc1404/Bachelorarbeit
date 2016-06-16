module.exports = {
    entry: './app/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        port: 80,
        historyApiFallback: {
            index: 'index.html'
        }
    }
};