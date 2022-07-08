exports.get = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Retorno do metodo GET do usuario ${id}`);
    res.json({
        name: 'Guilherme',
        email: 'teste@teste.com.br',
        url: [{
            type: 'github',
            url: 'http://github.com.br'
        }]
    })
};

exports.post = (req, res, next) => {
    res.status(201).send(`Retorno do metodo GET do usuario`);
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Retorno do metodo PUT do usuario ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Retorno do metodo DELETE do usuario ${id}`);
};