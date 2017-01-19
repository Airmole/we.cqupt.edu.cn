/**
 * Cong Min @ 蓝山工作室
 */
var express = require('express');
var app = express();
var mysql = require('mysql');
var mysql_conf = require('./mysql.js');
//创建数据池
global.dbpool = mysql.createPool(mysql_conf);

//视图路径，默认为views，否则需要：
// app.set('views', '[path]');
//模板引擎
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//设置静态路径
app.use(express.static('dist'));

//路由，指向./routes/index.js
require('./routes')(app);

app.listen(3030);