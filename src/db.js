const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "anv223",
    host: "localhost",
    port: 5432,
    database: "FCF"

});
module.exports = pool;