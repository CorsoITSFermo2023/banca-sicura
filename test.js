const { getUtente, selectMovimenti, insertMovimento } = require("./db/dao");
const { smartSelect } = require("./db/db-smart");

async function run() {
  const utenti = await smartSelect('utente');
  console.log(utenti);
  const andreani = await getUtente('andreani');
  console.log(andreani);
  insertMovimento(andreani.username, 'Macchinetta', 0.5, '2023-06-05')
  const movimenti = await selectMovimenti(andreani.username);
  console.log(movimenti);
}
run()