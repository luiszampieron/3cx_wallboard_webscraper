module.exports = function(application) {
    application.get('/', (req, res) => {
        application.src.controllers.home.home(application, req, res)
    })
}