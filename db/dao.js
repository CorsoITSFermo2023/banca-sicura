const { all } = require("./db");
const { smartInsert, smartSelect } = require("./db-smart");

/**
 * 
 * @param {string} username 
 * @param {string} token 
 * @return {Promise<number>}
 */
async function insertToken(username, token) {
  return smartInsert('token', {
    token,
    username
  })
}

/**
 * 
 * @param {string} token 
 * @return {string}
 */
async function getUsernameFromToken(token) {
  const [utente] = await smartSelect('token', {
    token,
  });
  return utente;
}

/**
 * 
 * @param {string} username 
 * @returns {Promise<{ username: string, password: string }>}
 */
async function getUtente(username) {
  const [utente] = await smartSelect('utente', {
    username,
  });
  return utente;
}

/**
 * 
 * @param {string} username 
 * @param {string} esercente 
 * @param {number} importo 
 * @param {string} data 
 * @returns {Promise<{ username: string, password: string }>}
 */
async function insertMovimento(username, esercente, importo, data) {
  return smartInsert('movimento', {
    username,
    esercente,
    importo,
    data,
  })
}
/**
 * 
 * @param {string} username 
 * @param {string?} da 
 * @param {string?} a 
 * @returns 
 */
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