'use strict'

const moduleConfig = require('./utils/module-config')

module.exports = (arg) => {
  const send = moduleConfig(arg)

  return util.promisify((opts, callback) => {
    if (typeof opts == 'function') {
      callback = opts
      opts = undefined
    }
    send({
      path: 'pins',
      args: opts
    }, callback)
  })
}