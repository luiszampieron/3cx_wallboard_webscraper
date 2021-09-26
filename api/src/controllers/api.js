let value = {}

module.exports.api_salvar = function(application, req, res) {
    console.log(req.body)
    res.send(req.body)
    value = req.body
}

module.exports.api = function(application, req, res) {
        return res.json(value);
}

