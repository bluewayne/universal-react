/**
 * Created by liujinhe on 2017/4/6.
 */

var webapckConfig = require('./webpack.config')

module.exports = {
    ...webapckConfig, module: {
        rules: [
            {
                test: /\.js$/,
                use: ['react-hot-loader', 'babel-loader'],
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.json$/,
                use: 'json-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(jpe?g|png|gif|svg|less|css)$/i,
                use: 'url-loader?limit=1000'
            },
            {
                test: /\.css$/,

                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader', options: {
                        discardComments: {removeAll: true}
                    }
                    }
                ]
            },
            {
                test: /\.scss$/,

                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader', options: {
                        discardComments: {removeAll: true}
                    }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]

            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader', options: {
                        discardComments: {removeAll: true}
                    }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ]
                            }
                        }

                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    }
}