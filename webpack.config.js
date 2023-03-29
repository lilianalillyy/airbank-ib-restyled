const Encore = require('@symfony/webpack-encore');

Encore
    .disableSingleRuntimeChunk()
    .setOutputPath('dist')
    .setPublicPath('/')
    .addEntry('ib', './src/index.js')
    .enableSassLoader()

module.exports = Encore.getWebpackConfig();