const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode:"development",
    plugins:[new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                // test:/\.css$/i,
                // use:["style-loader","css-loader"]

                // test: /\.scss$/i,
                // use:["style-loader","css-loader","sass-loader"]

                // test: /\.(s[ac]|c)ss$/i,
                // use: ["style-loader", "css-loader", "sass-loader"]

                // test: /\.(s[ac]|c)ss$/i,
                // use:[MiniCssExtractPlugin.loader,"css-loader","sass-loader"]

                test: /\.(s[ac]|c)ss$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader","sass-loader","postcss-loader"]
            }
        ]
    },
    devtool:"source-map"
}