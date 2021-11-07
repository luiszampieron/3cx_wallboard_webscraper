let value = {active_calls: [], queue_agents: [], queue_stats: []}
let mensagem = {}

module.exports.api_salvar = function(application, req, res) {
    console.log(req.body)
    res.send(req.body)
    value = req.body
}

module.exports.api = function(application, req, res) {
        return res.json(value);
}

module.exports.api_mensagem_salvar = function(application, req, res) {
    mensagem = req.body
    res.redirect('/')
}

module.exports.api_mensagem = function(application, req, res) {
        return res.json(mensagem);
}
