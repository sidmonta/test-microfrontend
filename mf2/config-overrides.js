const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')

const port = 3001
const publicPath = `http://localhost:${port}/`

module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config.output.publicPath = publicPath
  config.devServer = {
    port,
    contentBase: './dist',
    historyApiFallback: {
      index: 'index.html',
    },
  }

  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'MFE2',
      library: { type: 'var', name: 'MFE2' },
      filename: 'remoteEntry.js',
      remotes: {
        MFE1: 'MFE1',
      },
      shared: ['react', 'react-dom'],
    })
  )

  config.plugins.push(
    new HtmlWebpackTagsPlugin({
      tags: [`http://localhost:3000/remoteEntry.js`],
      append: false, // prepend this as needs to be loaded before application-home
      publicPath: false,
    })
  )

  return config
}
