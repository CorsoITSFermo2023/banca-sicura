const {Router} = require("express");
const {md5} = require("./util");
const {smartInsert, smartSelect} = require("./db/db-smart")
const route = Router();
app = express(),
bodyParser = require('body-parser');
app.use(bodyParser.json());


route.post("/login"), async(req, res) => {
    const utenti = await smartSelect('utente');
    for (let i = 0 ; i < utenti.length ; i++){
        
    } 
}


