module.exports = function(application) {
    application.get('/api/dadosgerais', (req, res) => {
        application.src.controllers.api.api(application, req, res)
    })

    application.post('/api/enviardadosgerais', (req, res) => {
        application.src.controllers.api.api_salvar(application, req, res)
    })

    application.get('/api/mensagem', (req, res) => {
        application.src.controllers.api.api_mensagem(application, req, res)
    })

    application.post('/api/enviarmensagem', (req, res) => {
        application.src.controllers.api.api_mensagem_salvar(application, req, res)
        res.redirect('/api')
    })
}