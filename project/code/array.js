/**
 * 数组交集
 */

// 普通数组
const arr1 = [1, 2, 3, 4, 5 , 8 ,9],arr2 = [5, 6, 7, 8, 9];

const intersection = arr1.filter(function (val) { return arr2.indexOf(val) > -1 })
console.log(intersection) //[5, 8, 9]

// 数组对象
const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
const arr2 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
const result = arr2.filter(function (v) {
  return arr1.some(n => JSON.stringify(n) === JSON.stringify(v))
})
console.log(result); // [{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name5', id: 5 }]

/**
 * 数组并集
 */

// 普通数组
const arr1 = [1, 2, 3, 4, 5, 8, 9]
const arr2 = [5, 6, 7, 8, 9];
const result = arr1.concat(arr2.filter(v => !arr1.includes(v)))
console.log(result) //[1, 2, 3, 4, 5, 8, 9, 6, 7]

// 数组对象
const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
let arr3 = arr1.concat(arr2);
let result = [];
let obj = [];
result = arr3.reduce(function (prev, cur, index, arr) {
  obj[cur.id] ? '' : obj[cur.id] = true && prev.push(cur);
  return prev;
}, []);
console.log(result); //[{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]

/**
 * 数组差集
 */

// 普通数组
const arr1 = [1, 2, 3, 4, 5, 8, 9]
const arr2 = [5, 6, 7, 8, 9];
const diff = arr1.filter(item => !new Set(arr2).has(item))
console.log(diff) //[ 1, 2, 3, 4 ]

// 对象数组
let arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
let arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
let result = arr1.filter(function (v) {
  return arr2.every(n => JSON.stringify(n) !== JSON.stringify(v))
})
console.log(result); // [ { name: 'name2', id: 2 }, { name: 'name3', id: 3 } ]

/**
 * 数组补集
 */

// 普通数组
const arr1 = [1, 2, 3, 4, 5, 8, 9]
const arr2 = [5, 6, 7, 8, 9];
const difference = Array.from(new Set(arr1.concat(arr2).filter(v => !new Set(arr1).has(v) || !new Set(arr2).has(v)))) 
console.log(difference) //[ 1, 2, 3, 4, 6, 7 ]

// 对象数组
let arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
let arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
let arr3 = arr1.concat(arr2);
let result = arr3.filter(function (v) {
  return arr1.every(n => JSON.stringify(n) !== JSON.stringify(v)) || arr2.every(n => JSON.stringify(n) !== JSON.stringify(v))
})
console.log(result); // [{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]

// 差集就是数组arr1相对于arr2所没有的集合，补集是两个数组各自没有的集合

/**
 * 数组去重
 */

// 普通数组
console.log(Array.from(new Set([1, 2, 3, 3, 4, 4]))) //[1,2,3,4]
console.log([...new Set([1, 2, 3, 3, 4, 4])]) //[1,2,3,4]

// 对象数组
const arr = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
 const result = [];
 arr.forEach(item=>{
    !result.some(v => JSON.stringify(v) === JSON.stringify(item)) && result.push(item)
 })
 console.log(result) //[{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]

/**
 * 数组排序
 */

// 普通数组
console.log([1, 2, 3, 4].sort((a, b) => a - b)); // [1, 2,3,4] 升序
console.log([1, 2, 3, 4].sort((a, b) => b - a)); // [4,3,2,1] 降序

// 数组对象
const arr1 = [{ name: "Rom", age: 12 }, { name: "Bob", age: 22 }].sort((a, b) => { return a.age - b.age })//升序
const arr2 = [{ name: "Rom", age: 12 }, { name: "Bob", age: 22 }].sort((a, b) => { return -a.age + b.age })//降序
console.log(arr2) // [{ name: 'Bob', age:22 }, { name: 'Rom', age: 12 }]
console.log(arr1) // [ { name: 'Rom', age: 12 }, { name: 'Bob', age: 22 } ]

// 两个种类型数组都可以使用sort排序，sort是浏览器内置方法；
// 默认是升序排序，默认返回一个函数，有两个参数：
// (a, b) => a - b 是升序；
// (a, b) => b - a 是降序。

/**
 * 最大值
 */

// 普通数组
Math.max(...[1, 2, 3, 4]) //4
Math.max.apply(this, [1, 2, 3, 4]) //4
[1, 2, 3, 4].reduce((prev, cur, curIndex, arr) => {
   return Math.max(prev, cur);
}, 0) //4

// 数组对象，取数组对象中id的最大值
const arr = [{ id: 1, name: 'jack' },{ id: 2, name: 'may' },{ id: 3, name: 'shawn' },{ id: 4, name: 'tony' }]
const arr1 = Math.max.apply(Math, arr.map(item => { return item.id }))
const arr2 = arr.sort((a, b) => { return b.id - a.id })[0].id
console.log(arr1) // 4
console.log(arr2) // 4

/**
 * 数组求和
 */

// 普通数组
[1, 2, 3, 4].reduce(function (prev, cur) {
  return prev + cur;
}, 0) //10 

// 数组对象
const sum = [{age:1},{age:2}].reduce(function (prev, cur) {
  return prev + cur.age;
}, 0) //3
console.log(sum)

/**
 * 数组合并
 */

// 普通数组
const arr1 =[1, 2, 3, 4].concat([5, 6]) //[1,2,3,4,5,6]
const arr2 =[...[1, 2, 3, 4],...[4, 5]] //[1,2,3,4,5,6]
const arrA = [1, 2], arrB = [3, 4]
const arr3 =[].concat.apply(arrA, arrB)//arrA值为[1,2,3,4]

// 数组对象
const arr4 = [{ age: 1 }].concat([{ age: 2 }])
const arr5 = [...[{ age: 1 }],...[{ age: 2 }]]
console.log(arr4) //[ { age: 1 }, { age: 2 } ]
console.log(arr5) // [ { age: 1 }, { age: 2 } ]

/**
 * 数组是否包含值
 */

// 普通数组
console.log([1, 2, 3].includes(4)) //false
console.log([1, 2, 3].indexOf(4)) //-1 如果存在换回索引
console.log([1, 2, 3].find((item) => item === 3)) //3 如果数组中无值返回undefined
console.log([1, 2, 3].findIndex((item) => item === 3)) //2 如果数组中无值返回-1

// 数组对象
const flag = [{age:1},{age:2}].some(v=>JSON.stringify(v)===JSON.stringify({age:2}))
console.log(flag)

/**
 * 数组每一项都满足
 */

// 普通数组
[1, 2, 3].every(item => { return item > 2 })

// 数组对象
const arr = [{ age: 3 }, { age: 4 }, { age: 5 }]
arr.every(item => { return item.age > 2 }) // true

/**
 * 数组有一项都满足
 */

// 普通数组
[1, 2, 3].some(item => { return item > 2 })
// 数组对象
const arr = [{ age: 3 }, { age: 4 }, { age: 5 }]
arr.some(item => { return item.age < 4 }) // true

/**
 * 对象转数组
 * 将对象的key和value转化成数组
 */
Object.keys({ name: '张三', age: 14 }) //['name','age']
Object.values({ name: '张三', age: 14 }) //['张三',14]
Object.entries({ name: '张三', age: 14 }) //[[name,'张三'],[age,14]]
Object.fromEntries([name, '张三'], [age, 14]) //ES10的api,Chrome不支持 , firefox输出{name:'张三',age:14}

/**
 * 数组转对象
 * 将数组的值转化为对象的value
 */
const arrName = ['张三', '李四', '王五']
const arrAge=['20','30','40']
const arrDec = ['描述1', '描述2', '描述3']
const obj = arrName.map((item,index)=>{
  return { name: item, age: arrAge[index],dec:arrDec[index]}
})

console.log(obj) // [{ name: '张三', age: '20', dec: '描述1' },{ name: '李四', age: '30', dec: '描述2' },{ name: '王五', age: '40', dec: '描述3' }]

/**
 * 数组解构
 */
const arr=[1,2]; //后面一定要加分号，因为不加解释器会认为在读数组
[arr[1], arr[0]] = [arr[0], arr[1]]; // [2,1]







