/**
 * Cong Min @ 蓝山工作室
 */
module.exports = function (app) {
    require('./home')(app); 	    //主页
    require('./dashboard')(app); 	//大盘
};