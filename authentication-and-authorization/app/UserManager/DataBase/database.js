const {Pool, Client} = require('pg');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const pool = new Pool({
    user: process.env.USER_DATABASE,
    host: process.env.HOST_DATABASE_AUTH,
    database: process.env.NAME_DATABASE,
    password: process.env.PASSWORD_DATABASE,
    port: process.env.PORT_DATABASE_AUTH,


})

module.exports = pool