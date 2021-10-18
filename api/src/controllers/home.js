module.exports.home = function(application, req, res) {
    res.sendFile(application.pathh.join(__dirname, '../../build', 'index.html'))
}
