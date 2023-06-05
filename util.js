const { createHash } = require('crypto')

function md5(string) {
  return createHash('md5').update(string).digest("hex")
}

module.exports = {
  md5
}