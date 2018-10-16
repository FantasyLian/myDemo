/**
 * concat() 方法用于连接两个或多个数组
 * 该方法不会改变现有的数组，仅会返回被
 * 连接数组的一个副本
 */
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr3);

let arr4 = [...arr1, ...arr2]
console.log(arr4);