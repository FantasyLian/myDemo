// 对象变量属性
const flag = true;
const obj = {
    a: 0,
    [flag ? "c" : "d"]: 2
};
// obj => { a: 0, c: 2 }

// 对象多余属性删除
const { name, age, ...obj } = { name: '张三', age: 13, dec: '描述1', info: '信息' }
console.log(name)  // 张三
console.log(age)  // 13
console.log(obj)  // {dec: '描述1', info: '信息' }

// 对象嵌套属性解构
const { info:{ dec} } = { name: '张三', age: 13, info:{dec: '描述1', info: '信息' }}
console.log(dec) // 描述1

// 解构对象属性别名
const { name:newName } = { name: '张三', age: 13 }
console.log(newName)  // 张三

// 解构对象属性默认值
const { dec='这是默认dec值' } = { name: '张三', age: 13 }
console.log(dec) //这是默认dec值

// 拦截对象
// 利用Object.defineProperty拦截对象 无法拦截数组的值
let obj = { name: '', age: '', sex: '' },
  defaultName = ["这是姓名默认值1", "这是年龄默认值1", "这是性别默认值1"];
Object.keys(obj).forEach(key => {
  Object.defineProperty(obj, key, { // 拦截整个object 对象，并通过get获取值，set设置值，vue 2.x的核心就是这个来监听
    get() {
      return defaultName;
    },
    set(value) {
      defaultName = value;
    }
  });
});

console.log(obj.name); // [ '这是姓名默认值1', '这是年龄默认值1', '这是性别默认值1' ]
console.log(obj.age); // [ '这是姓名默认值1', '这是年龄默认值1', '这是性别默认值1' ]
console.log(obj.sex); // [ '这是姓名默认值1', '这是年龄默认值1', '这是性别默认值1' ]
obj.name = "这是改变值1";
console.log(obj.name); // 这是改变值1
console.log(obj.age);  // 这是改变值1
console.log(obj.sex); // 这是改变值1

let objOne = {}, defaultNameOne = "这是默认值2";
Object.defineProperty(obj, 'name', {
  get() {
    return defaultNameOne;
  },
  set(value) {
    defaultNameOne = value;
  }
});
console.log(objOne.name); // undefined
objOne.name = "这是改变值2";
console.log(objOne.name); // 这是改变值2

// 利用proxy拦截对象
let obj = { name: '', age: '', sex: '' }
let handler = {
  get(target, key, receiver) {
    console.log("get", key); 
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    console.log("set", key, value); // set name 李四  // set age 24
    return Reflect.set(target, key, value, receiver);
  }
};
let proxy = new Proxy(obj, handler);
proxy.name = "李四";
proxy.age = 24;

// defineProterty和proxy的对比：
// 1.defineProterty是es5的标准,proxy是es6的标准;
// 2.proxy可以监听到数组索引赋值,改变数组长度的变化;
// 3.proxy是监听对象,不用深层遍历,defineProterty是监听属性;
// 4.利用defineProterty实现双向数据绑定(vue2.x采用的核心)

// 对象深度拷贝
// JSON.stringify深度克隆对象;
// 1.无法对函数 、RegExp等特殊对象的克隆;
// 2.会抛弃对象的constructor,所有的构造函数会指向Object;
// 3.对象有循环引用,会报错
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';

const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];


function forEach(array, iteratee) {
  let index = -1;
  const length = array.length;
  while (++index < length) {
    iteratee(array[index], index);
  }
  return array;
}

function isObject(target) {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}

function getType(target) {
  return Object.prototype.toString.call(target);
}

function getInit(target) {
  const Ctor = target.constructor;
  return new Ctor();
}

function cloneSymbol(targe) {
  return Object(Symbol.prototype.valueOf.call(targe));
}

function cloneReg(targe) {
  const reFlags = /\w*$/;
  const result = new targe.constructor(targe.source, reFlags.exec(targe));
  result.lastIndex = targe.lastIndex;
  return result;
}

function cloneFunction(func) {
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  if (func.prototype) {
    const param = paramReg.exec(funcString);
    const body = bodyReg.exec(funcString);
    if (body) {
      if (param) {
        const paramArr = param[0].split(',');
        return new Function(...paramArr, body[0]);
      } else {
        return new Function(body[0]);
      }
    } else {
      return null;
    }
  } else {
    return eval(funcString);
  }
}

function cloneOtherType(targe, type) {
  const Ctor = targe.constructor;
  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(targe);
    case regexpTag:
      return cloneReg(targe);
    case symbolTag:
      return cloneSymbol(targe);
    case funcTag:
      return cloneFunction(targe);
    default:
      return null;
  }
}

function clone(target, map = new WeakMap()) {

  // 克隆原始类型
  if (!isObject(target)) {
    return target;
  }

  // 初始化
  const type = getType(target);
  let cloneTarget;
  if (deepTag.includes(type)) {
    cloneTarget = getInit(target, type);
  } else {
    return cloneOtherType(target, type);
  }

  // 防止循环引用
  if (map.get(target)) {
    return map.get(target);
  }
  map.set(target, cloneTarget);

  // 克隆set
  if (type === setTag) {
    target.forEach(value => {
      cloneTarget.add(clone(value, map));
    });
    return cloneTarget;
  }

  // 克隆map
  if (type === mapTag) {
    target.forEach((value, key) => {
      cloneTarget.set(key, clone(value, map));
    });
    return cloneTarget;
  }

  // 克隆对象和数组
  const keys = type === arrayTag ? undefined : Object.keys(target);
  forEach(keys || target, (value, key) => {
    if (keys) {
      key = value;
    }
    cloneTarget[key] = clone(target[key], map);
  });

  return cloneTarget;
}

console.log(clone({
  name: '张三', age: 23,
  obj: { name: '李四', age: 46 },
  arr: [1, 2, 3]
})) // { name: '张三', age: 23, obj: { name: '李四', age: 46 }, arr: [ 1, 2, 3 ] }

// // 对象是否相等
// 如果用JSON.stringify转化属性顺序不同，也不相等；
// 而且不支持无法对函数 、RegExp等特殊对象的克隆
function deepCompare(x, y) {
  var i, l, leftChain, rightChain;

  function compare2Objects(x, y) {
    var p;

    // remember that NaN === NaN returns false
    // and isNaN(undefined) returns true
    if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
      return true;
    }

    // Compare primitives and functions.     
    // Check if both arguments link to the same object.
    // Especially useful on the step where we compare prototypes
    if (x === y) {
      return true;
    }

    // Works in case when functions are created in constructor.
    // Comparing dates is a common scenario. Another built-ins?
    // We can even handle functions passed across iframes
    if ((typeof x === 'function' && typeof y === 'function') ||
      (x instanceof Date && y instanceof Date) ||
      (x instanceof RegExp && y instanceof RegExp) ||
      (x instanceof String && y instanceof String) ||
      (x instanceof Number && y instanceof Number)) {
      return x.toString() === y.toString();
    }

    // At last checking prototypes as good as we can
    if (!(x instanceof Object && y instanceof Object)) {
      return false;
    }

    if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
      return false;
    }

    if (x.constructor !== y.constructor) {
      return false;
    }

    if (x.prototype !== y.prototype) {
      return false;
    }

    // Check for infinitive linking loops
    if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
      return false;
    }

    // Quick checking of one object being a subset of another.
    // todo: cache the structure of arguments[0] for performance
    for (p in y) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        return false;
      } else if (typeof y[p] !== typeof x[p]) {
        return false;
      }
    }

    for (p in x) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        return false;
      } else if (typeof y[p] !== typeof x[p]) {
        return false;
      }

      switch (typeof (x[p])) {
        case 'object':
        case 'function':

          leftChain.push(x);
          rightChain.push(y);

          if (!compare2Objects(x[p], y[p])) {
            return false;
          }

          leftChain.pop();
          rightChain.pop();
          break;

        default:
          if (x[p] !== y[p]) {
            return false;
          }
          break;
      }
    }

    return true;
  }

  if (arguments.length < 1) {
    return true; 
  }

  for (i = 1, l = arguments.length; i < l; i++) {

    leftChain = []; //Todo: this can be cached
    rightChain = [];

    if (!compare2Objects(arguments[0], arguments[i])) {
      return false;
    }
  }

  return true;
}

const obj1 = { 
  name: '张三', age: 23, 
  obj: { name: '李四', age: 46 }, 
  arr: [1, 2, 3],
  date:new Date(23),
  reg: new RegExp('abc'),
  fun: ()=>{}
 }
const obj2 = { 
  name: '张三', age: 23, 
  obj: { name: '李四', age: 46 }, 
  arr: [1, 2, 3],
  date: new Date(23),
  reg: new RegExp('abc'),
  fun: ()=>{}
 }

console.log(deepCompare(obj1,obj2)) // true
// 判断对象是否相等，实际上就是要处理Array，Date，RegExp，Object，Function的特殊类型是否相等

// 对象转化为字符串 通过字符串+Object 的方式来转化对象为字符串(实际上是调用 .toString() 方法)
'the Math object:' + Math.ceil(3.4)                // "the Math object:4"
'the JSON object:' + {name:'曹操'}              // "the JSON object:[object Object]"

// 覆盖对象的toString和valueOf方法来自定义对象的类型转换
2  * { valueOf: ()=>'4' }                // 8
'J' + { toString: ()=>'ava' }                // "Java"

// 当+用在连接字符串时，当一个对象既有toString方法又有valueOf方法时候，JS通过盲目使用valueOf方法来解决这种含糊;
// 对象通过valueOf方法强制转换为数字，通过toString方法强制转换为字符串
'' + {toString:()=>'S',valueOf:()=>'J'}  //J

