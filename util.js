const { createHash, randomBytes } = require('crypto')

function md5(string) {
  return createHash('md5').update(string).digest("hex")
}

// generazione token
function get_random() {
  const promise = new Promise((resolve, reject) => {
    randomBytes(48, function (ex, buf) {
      if (ex) {
        reject(ex)
      } else {
        token = buf.toString('base64').replace(/\//g, '_').replace(/\+/g, '-');
        resolve(token)
      }

    });
  })
 
  
}

module.exports = {
  md5, get_random
}