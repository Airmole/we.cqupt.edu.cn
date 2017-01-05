/* main.js
 * @ Cong Min
 */
require('../sass/style.scss');
var $ = jQuery = require('jquery');
require('typed.js');
$(function(){
    $(".btn").click(function(){
        $(".btn").toggleClass('active');
        $(".enter").toggleClass('active');
    });
    $(".define-text").typed({
        strings: ["微信小程序", "校园移动门户", "搜人利器", "点名神器", "掌上课程表", "考试倒计时", "校园生活助手", "百事通", "期待您的发现"],
        typeSpeed: 100,
        backDelay: 5000,
        backSpeed: 50,
        loop: true,
        cursorChar: "_",
        preStringTyped: function() {
            var list = $('.docs-text'),
                active = $('.docs-text.active'),
                next;
            if(!active.length){
                next = $(list[0]);
            }else{
                next = active.next();
                if (!next.length) {
                    next = $(list[0]);
                }
                active.removeClass('active');
            }
            next.addClass('active');
            if(next.is('.docs-img-mark')){
                $('.enter').addClass('inner');
                $('.btn').hide();
            } else {
                $('.enter').removeClass('inner');
                $('.btn').show();
            }

            var box_inner = $('.box-inner'),
                left = box_inner.data('left');
            if(!left || left >= 235*9) { left = 0; }
            left = left + 235;
            box_inner.css('transform', 'translate3d(-'+left+'px,0,0)');
            box_inner.data('left', left);
        }
    });
    $.getJSON("https://api.github.com/repos/lanshan-studio/wecqupt", function(res) {
        $(".github-count").text(res.stargazers_count);
        $(".github-box").addClass('active');
    });
});

/* CNZZ统计 */
$(function() {
    var box = document.createElement("div"),
        cnzz = document.createElement("script");
    box.style.display = "none";
    cnzz.src = "//s1.cnzz.com/z_stat.php?id=1260605208";
    box.appendChild(cnzz);
    document.body.appendChild(box);
});