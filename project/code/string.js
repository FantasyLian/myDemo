// 字符串翻转
function reverseStr(str = "") {
  return str.split("").reduceRight((t, v) => t + v);
}

const str = "reduce123";
console.log(reverseStr(str)); // "321recuder"

// url参数序列化，将对象序列化成url参数传递
function stringifyUrl(search = {}) {
  return Object.entries(search).reduce(
    (t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
    Object.keys(search).length ? "?" : ""
  ).replace(/&$/, "");
}

console.log(stringifyUrl({ age: 27, name: "YZW" })); // "?age=27&name=YZW"

// url参数反序列化，一般会通过location.search拿到路由传递的参数，并进行反序列化得到对象
function parseUrlSearch() {
  const search = '?age=25&name=TYJ'
  return search.replace(/(^\?)|(&$)/g, "").split("&").reduce((t, v) => {
    const [key, val] = v.split("=");
    t[key] = decodeURIComponent(val);
    return t;
  }, {});
}

console.log(parseUrlSearch()); // { age: "25", name: "TYJ" }

// 转化为字符串
const val = 1 + ""; // 通过+ ''空字符串转化
console.log(val); // "1"
console.log(typeof val); // "string"

const val1 = String(1);
console.log(val1); // "1"
console.log(typeof val1); // "string"