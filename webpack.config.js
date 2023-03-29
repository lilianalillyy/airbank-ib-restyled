const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('/dist')
    .setPublicPath('/')
    .addEntry('ib', './js/index.js')
    .enableSassLoader()
    .cleanupOutputBeforeBuild()