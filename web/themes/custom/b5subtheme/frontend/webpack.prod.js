const { merge } = require('webpack-merge');
const common = require('pronovix-drupal-dev').common;
const prod = require('pronovix-drupal-dev').prod;
const entries = require('./webpack.entries.js');

module.exports = merge(entries, common, prod);
