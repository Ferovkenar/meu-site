const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
    host: 192.168.100.70,
    user: root,
    password: Ferovkenar132@,
    database: user_auth
});

module.exports = pool.promise();
