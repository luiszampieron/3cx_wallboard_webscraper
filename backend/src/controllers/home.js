module.exports.home = function(application, req, res) {
    res.sendFile(application.path.join(__dirname, '../views/home', 'index.html'))
}
