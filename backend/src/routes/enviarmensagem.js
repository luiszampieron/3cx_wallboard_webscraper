module.exports = function (application) {

    application.get('/enviarmensagem', (req, res) => {
        application.src.controllers.enviarmensagem.enviarMensagem(application, req, res)
    })
}