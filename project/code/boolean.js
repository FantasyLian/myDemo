// 判断数据类型
function dataTypeJudge(val, type) {
  const dataType = Object.prototype.toString.call(val).replace(/\[object (\w+)\]/, "$1").toLowerCase();
  return type ? dataType === type : dataType;
}
console.log(dataTypeJudge("young")); // "string"
console.log(dataTypeJudge(20190214)); // "number"
console.log(dataTypeJudge(true)); // "boolean"
console.log(dataTypeJudge([], "array")); // true
console.log(dataTypeJudge({}, "array")); // false

// 可判断类型：undefined、null、string、number、boolean、array、object、symbol、date、regexp、function、asyncfunction、arguments、set、map、weakset、weakmap

// 使用Boolean过滤数组假值
const compact = arr => arr.filter(Boolean)
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])  //[ 1, 2, 3, 'a', 's', 34 ]

// 短路运算

// ||（或）
const flag = false || true //true
// 某个值为假时可以给默认值
const arr = false || []

// &&（与）
const flag1 = false && true //false
const flag2 = true && true //true

// switch 简写
switch(a) {
  case '张三':
    return 'age是12'
  case '李四':
    return 'age是120'
}

// 使用对象替换后
const obj ={
  '张三': 'age12',
  '李四': 'age120',
}
console.log(obj['张三'])