const {Pool, Client} = require('pg');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const pool = new Pool({
    user: process.env.USER_DATABASE,
    host: process.env.HOST_DATABASE,
    database: process.env.NAME_DATABASE,
    password: process.env.PASSWORD_DATABASE,
    port: process.env.PORT_DATABASE,


})

module.exports = pool