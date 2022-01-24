const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const port = 3000
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
      name: 'MFE1',
      library: { type: 'var', name: 'MFE1' },
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button.jsx',
      },
      shared: ['react', 'react-dom'],
    })
  )
  console.log(config)
  return config
}
