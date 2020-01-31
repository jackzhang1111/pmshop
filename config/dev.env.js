'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SHOP_API:'"http://serviceapp.tospino.com"',   //ERP api
})
