module.exports = function(application) {
    application.get('/api/DadosGerais', (req, res) => {
        application.src.controllers.api.api(application, req, res)
    })

    application.post('/api/EnviarDadosGerais', (req, res) => {
        application.src.controllers.api.api_salvar(application, req, res)
    })
}