// STEP TWO AFTER (db.js, index.js and app.js) IS to create controller.js

const pool = require('../db');
const queries = require('../queries/queries');


const getall = async (req, res) => {
    try {
        const { rows } = await pool.query(queries.getdata);
        res.json({ rows });
    } catch (error) {
        console.log(error.message);
        res.sendStatus(403);
    }
}

module.exports = { getall };