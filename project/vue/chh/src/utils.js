/*!
 * fileNmae: utils.js;
 * author: Mr.cat;
 * createDate: 2019.11.02;
 */
const initPage = function(a) {
    function b() {
        var b = g.getBoundingClientRect().width;
        a.rem = (b / 7.5 > 100 ? 100 : (b / 7.5 < 25 ? 25 : b / 7.5)),
        g.style.fontSize = a.rem + 'px';
    }
    var g = a.document.documentElement, e;
    a.addEventListener('resize', function() {
        clearTimeout(e),
        e = setTimeout(b, 300);
    }, !1),
    a.addEventListener('pageshow', function(a) {
        a.persisted && (clearTimeout(e),
        e = setTimeout(b, 300));
    }, !1),
    b();
}(window);

/**
 * 获取地址栏的参数
 * @param {*} name 
 */
const getUrlSearch = function (name) {
    // 未传参，返回空
    if (!name) return null;
    // 查询参数：先通过search取值，如果取不到就通过hash来取
    let after = window.location.search;
    after = after.substr(1) || window.location.hash.split('?')[1];
    // 地址栏URL没有查询参数，返回空
    if (!after) return null;
    // 如果查询参数中没有"name"，返回空
    if (after.indexOf(name) === -1) return null;

    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    // 当地址栏参数存在中文时，需要解码，不然会乱码
    let r = decodeURI(after).match(reg);
    // 如果url中"name"没有值，返回空
    if (!r) return null;

    return r[2];
}

export { 
    initPage, 
    getUrlSearch
}