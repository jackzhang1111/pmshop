'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SHOP_API:'"http://192.168.3.107:83"',   //ERP api
})
