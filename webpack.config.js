const path = require('path');

module.exports = {
    entry: './src/js/index.jsx',

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public/js'),
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'react-hot-loader' },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            }
        ]
    },

    devtool: 'cheap-eval-source-map',
    
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};