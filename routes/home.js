/**
 * Cong Min @ 蓝山工作室
 */
module.exports = function (app) {
    app.get('/home', function (req, res) {
        res.redirect('/');
    });
    app.get('/', function (req, res) {
        res.render('home');
    });
};