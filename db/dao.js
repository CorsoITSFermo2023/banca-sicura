const { all } = require("./db");
const { smartInsert, smartSelect } = require("./db-smart");

async function insertToken(username, token) {
  return smartInsert('token', {
    token,
    username
  })
}

async function getUsernameFromToken(token) {
  const [utente] = await smartSelect('token', {
    token,
  });
  return utente;
}

async function getUtente(username) {
  const [utente] = await smartSelect('utente', {
    username,
  });
  return utente;
}

async function insertMovimento(username, esercente, importo, data) {
  return smartInsert('movimento', {
    username,
    esercente,
    importo,
    data,
  })
}

async function selectMovimenti(username, da = null, a = null) {
  const sql = "SELECT * FROM movimento WHERE username = ? AND data between ifnull(?, data) AND ifnull(?, data) ";
  return all(sql, [username, da, a])
}

module.exports = {
  insertMovimento,
  insertToken,
  getUsernameFromToken,
  getUtente,
  selectMovimenti
}