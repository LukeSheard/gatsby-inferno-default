exports.modifyWebpackConfig = function(config) {
  config.merge({
    resolve: {
      alias: {
        'react': 'inferno-compat',
        'react-dom': 'inferno-compat',
        'react-dom/server': 'inferno-compat'
      }
    }
  })

  return config;
}