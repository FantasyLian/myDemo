// 数字千分位
function thousandNum(num = 0) {
  const str = (+num).toString().split(".");
  const int = nums => nums.split("").reverse().reduceRight((t, v, i) => t + (i % 3 ? v : `${v},`), "").replace(/^,|,$/g, "");
  const dec = nums => nums.split("").reduce((t, v, i) => t + ((i + 1) % 3 ? v : `${v},`), "").replace(/^,|,$/g, "");
  return str.length > 1 ? `${int(str[0])}.${dec(str[1])}` : int(str[0]);
}

thousandNum(1234); // "1,234"
thousandNum(1234.00); // "1,234"
thousandNum(0.1234); // "0.123,4"
console.log(thousandNum(1234.5678)); // "1,234.567,8"

console.log('1234567890'.replace(/\B(?=(\d{3})+(?!\d))/g, ","))
console.log((1234567890).toLocaleString())

// 字符串转数字
'32' * 1            // 32
'ds' * 1            // NaN
null * 1            // 0
undefined * 1    // NaN
1  * { valueOf: ()=>'3' }        // 3

+ '123'            // 123
+ 'ds'               // NaN
+ ''                    // 0
+ null              // 0
+ undefined    // NaN
+ { valueOf: ()=>'3' }    // 3

// 判断小数是否相等
Number.EPSILON=(function(){   //解决兼容性问题
    return Number.EPSILON?Number.EPSILON:Math.pow(2,-52);
})();
//上面是一个自调用函数，当JS文件刚加载到内存中，就会去判断并返回一个结果
function numbersequal(a,b){ 
    return Math.abs(a-b)<Number.EPSILON;
  }
//接下来再判断   
const a=0.1+0.2, b=0.3;
console.log(numbersequal(a,b)); //这里就为true了

// 双位运算符,双位运算符比Math.floor(),Math.ceil()速度快
~~7.5                // 7
Math.ceil(7.5)       // 8
Math.floor(7.5)      // 7


~~-7.5          // -7
Math.floor(-7.5)     // -8
Math.ceil(-7.5)      // -7
// 所以负数时，双位运算符和Math.ceil结果一致，正数时和Math.floor结果一致

// 取整和奇偶性判断

// 取整
3.3 | 0         // 3
-3.9 | 0        // -3

parseInt(3.3)  // 3
parseInt(-3.3) // -3

// 四舍五入取整
Math.round(3.3) // 3
Math.round(-3.3) // -3

// 向上取整
Math.ceil(3.3) // 4
Math.ceil(-3.3) // -3

// 向下取整
Math.floor(3.3) // 3
Math.floor(-3.3) // -4

// 判断奇偶数
const num=5;
!!(num & 1) // true
!!(num % 2) // true









