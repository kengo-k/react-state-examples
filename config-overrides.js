const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)
console.log('--------------------------------------------------')
module.exports = function (config, env) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    '~': resolve('./src'),
  })

  return config
}
