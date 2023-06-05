const { run } = require("./db/db");
const { smartSelect, smartInsert } = require("./db/db-smart");
const { md5 } = require("./util");

async function initStruct() {
  await run(`CREATE TABLE IF NOT EXISTS movimento (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username STRING,
    esercente STRING,
    importo REAL,
    data STRING
  )`);
  await run(`CREATE TABLE IF NOT EXISTS utente (
    username STRINT PRIMARY KEY,
    password STRING
  )`);
  await run(`CREATE TABLE IF NOT EXISTS token (
    token STRING PRIMARY KEY,
    username STRING
  )`);

  const [utente] = await smartSelect('utente');
  if (!utente) {
    await smartInsert(
      "utente",
      {
        username: 'andreani',
        password: md5('stefano')
      }
    );
    await smartInsert(
      "utente",
      {
        username: 'vellutati',
        password: md5('alessandro')
      }
    );
    await smartInsert(
      "utente",
      {
        username: 'litti',
        password: md5('guido')
      }
    );
  }

}

module.exports = initStruct;