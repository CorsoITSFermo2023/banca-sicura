const initStruct = require("./init-struct");
const express = require('express')
const bodyParser = require("body-parser");
const { getUtente, selectMovimenti, insertMovimento, insertToken, getUsernameFromToken } = require("./db/dao");
const { smartSelect } = require("./db/db-smart");

const port = 3000;
const app = express();
initStruct();


app.post('/login', async (req,res) =>{

})







app.listen(port)