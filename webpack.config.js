
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        "eptools": './src/index.ts',
        "eptools.min": './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
        library: 'eptools',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.d.ts']
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /.min\.js$/
            })
        ]
    }
}