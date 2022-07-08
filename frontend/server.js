// const path = require('path');
// const express = require('express');

// const app = express();

// app.use(require('cors')());
// app.use(express.json());

// app.post('/send', (req, res) => {
//     const nome = req.body.nome;
//     const email = req.body.email;
// 	const tel = req.body.tel;
// 	const mensagem = req.body.mensagem;
    
//     require('./src/services/mailService')(nome, email, tel, mensagem)
//         .then(response => res.json(response))
//         .catch(error => res.status(500).json(error));
// })

// app.use(express.static(path.join(__dirname, 'build')));

// app.listen(3000, () => {
//     console.log('Server start');
// })