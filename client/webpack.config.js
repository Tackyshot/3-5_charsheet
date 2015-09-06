import webpack from 'webpack';

let webpackConfig = {
    entry: "./app.js",
    output: {
        filename: "../app/assets/javascripts/bundle.js"
    },
    module:{
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ]
};

module.exports = webpackConfig;