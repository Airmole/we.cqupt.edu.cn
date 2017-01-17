/**
 * Cong Min @ 蓝山工作室
 */
var express = require('express');
var mysql_config = require('./mysql.js');
var app = express();

//视图路径，默认为views，否则需要：
// app.set('views', '[path]');
//模板引擎
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//设置静态路径
app.use(express.static('dist'));

app.get('/index.html', function (req, res) { res.redirect('/'); });
app.get('/index', function (req, res) { res.redirect('/'); });
app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(3030);