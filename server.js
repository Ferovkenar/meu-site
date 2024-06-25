const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Permitir requisições do frontend hospedado no GitHub Pages
app.use(cors({ origin: 'https://username.github.io/reponame' }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Redirecionamento da página inicial para a página de login
app.get('/', (req, res) => {
    res.redirect('/login');
});

// Rotas para registro, login e home
app.get('/register', (req, res) => res.render('register'));
app.get('/login', (req, res) => res.render('login'));
app.get('/home', (req, res) => res.render('home'));

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
