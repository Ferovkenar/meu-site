const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
    create: async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return db.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
                          [user.username, user.email, hashedPassword]);
    },
    findByEmail: (email) => {
        return db.execute('SELECT * FROM users WHERE email = ?', [email]);
    }
};

module.exports = User;
