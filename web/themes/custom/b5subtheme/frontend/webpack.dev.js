const { merge } = require('webpack-merge');
const common = require('pronovix-drupal-dev').common;
const dev = require('pronovix-drupal-dev').dev;
const entries = require('./webpack.entries.js');

module.exports = merge(entries, common, dev);
