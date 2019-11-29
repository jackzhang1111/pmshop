'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SHOP_API:'"http://test.api.portal.xinquanjk.com:90"',  //商城 api
})
