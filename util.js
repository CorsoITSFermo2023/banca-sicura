const { createHash, randomBytes } = require('crypto')

function md5(string) {
  return createHash('md5').update(string).digest("hex")
}

// generazione token
function get_random(){
  const Promise = new Promise (resolve,reject)
  randomBytes(48, function(ex, buf) {
  token = buf.toString('base64').replace(/\//g,'_').replace(/\+/g,'-');
});
  
}

module.exports = {
  md5,get_random
}