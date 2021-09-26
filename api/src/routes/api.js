module.exports = function(application) {
    application.get('/api', (req, res) => {
        application.src.controllers.api.api(application, req, res)
    })

    application.post('/api', (req, res) => {
        application.src.controllers.api.api_salvar(application, req, res)
    })
}