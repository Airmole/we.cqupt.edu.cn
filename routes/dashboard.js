/**
 * Cong Min @ 蓝山工作室
 */
module.exports = function (app) {
    app.get('/dashboard', function (req, res) {
        // 通过连接池连接数据库
        global.dbpool.getConnection(function(err, connection){
            // sql语句
            var sqls = [
                "SELECT COUNT(openid) count FROM we_user;",   //微信用户总量
                "SELECT COUNT(openid) count FROM we_user_info;",  //校园绑定用户量
                "SELECT DATE_FORMAT(create_time,'%Y-%m-%d') days,COUNT(openid) count FROM we_user WHERE is_bind=1 GROUP BY days;",  //每日新绑定量
                "SELECT DATE_FORMAT(last_time,'%Y-%m-%d') days,COUNT(openid) count FROM we_user WHERE is_bind=1 GROUP BY days;",    //绑定用户最后活跃日期
                "SELECT COUNT(log_id) count FROM we_user_log WHERE appsource='We重邮';",   //接口访问总量
                "SELECT DATE_FORMAT(time,'%Y-%m-%d') days,COUNT(openid) count FROM we_user_log WHERE appsource='We重邮' GROUP BY days;",  //每日接口访问量
                "SELECT action,COUNT(log_id) count FROM we_user_log WHERE appsource='We重邮' AND openid<>'微信小程序' GROUP BY action ORDER BY count DESC;"    //各接口用户主动访问量
           ];
            // 查询数据库
            connection.query(sqls.join(''), function (error, results, fields) {
                connection.release();   // 释放连接池
                if (error) throw error;
                res.render('dashboard', {
                    user: {     //用户
                        total: results[0][0].count,     //微信用户总量
                        bind: results[1][0].count,      //校园绑定用户量
                        list: {
                            days: results[2],           //每日新绑定量
                            active: results[3]          //绑定用户最后活跃日期
                        }
                    },
                    visit: {    //访问量
                        total: results[4][0].count,     //接口访问总量
                        list: {
                            days: results[5],           //每日接口访问量
                            action: results[6]          //各接口用户主动访问量
                        }
                    }
                });
            });
        });
    });
};