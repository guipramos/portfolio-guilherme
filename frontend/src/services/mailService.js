// const mailer = require('nodemailer');

// module.exports = (nome, email, mensagem, tel) => {
//     const smtp = mailer.createTransport({
//         host: 'smtp.office365.com',
//         port: 587,
//         secure: false,
//         auth: {
//             user: 'gui.pramos@hotmail.com',
//             pass: '@pElud01234!'
//         }
//     })
//     const mail = {
//         from: 'gui.pramos@hotmail.com',
//         to: email,
//         subject: `E-mail enviado por ${nome}`,
//         text: mensagem
//     }

//     return new Promise((resolve, reject) => {
//         smtp.sendMail(mail)
//             .then(response => {
//                 smtp.close();
//                 return resolve(response)
//             })
//             .catch(error => {
//                 smtp.close();
//                 return reject(error);
//             })
//     })
// }