const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        await User.create({ username, email, password });
        res.redirect('/login');
    } catch (error) {
        res.status(500).send('Erro no servidor');
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const [user] = await User.findByEmail(email);
        
        if (user && await bcrypt.compare(password, user[0].password)) {
            res.redirect('/index');
        } else {
            res.status(401).send('Credenciais inválidas');
        }
    } catch (error) {
        res.status(500).send('Erro no servidor');
    }
};
