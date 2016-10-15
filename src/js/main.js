/* main.js
 * @ Cong Min
 */
require('../sass/style.scss');
/* CNZZ统计 */
(function() {
    var box = document.createElement("div"),
        cnzz = document.createElement("script");
    box.style.display = "none";
    cnzz.src = "//s1.cnzz.com/z_stat.php?id=1260605208";
    box.appendChild(cnzz);
    document.body.appendChild(box);
})();