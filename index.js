const initStruct = require("./init-struct");


// generazione token
require('crypto').randomBytes(48, function(ex, buf) {
    token = buf.toString('base64').replace(/\//g,'_').replace(/\+/g,'-');
});


initStruct();