import app from './app';
// const app = require('./app');

const port = 3003;
app.listen(port, () => {
    console.log(`Escutando na porta ${port}`);
    console.log(`CTRL + Clique em http://localhost:${port}`);
    // console.log(app);
});

// PAROU EM: Aula 8 - Criando usuarios - 12:00 (instalação do bcrypt.js)
