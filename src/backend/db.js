const {Pool} = require('pg');
const {PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER} = process.env;

const pool = new Pool({
    user: PGUSER,
    host: PGHOST,
    database: PGDATABASE,
    password: PGPASSWORD,
    port: PGPORT
})

module.exports = pool;