'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  friend: '"/friend/"',
  ringtone: '"/ringtone/"',
  management: '"/management/"'
})
