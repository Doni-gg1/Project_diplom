const Pool = require('pg');
const pool = new Pool.Pool({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    port: '5432',
    database: 'AVN'
})

module.exports =  pool