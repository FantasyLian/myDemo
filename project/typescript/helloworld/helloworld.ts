/**
 * 第一个 TS 程序（注释用于代码提示）
 * @param <msg 字符串类型>
 * @return (字符串)
 */

function helloWorld(msg:string):string {
	return "Hello, " + msg;
}

let msg = "My First TypeSctipt";
document.body.innerHTML = helloWorld(msg);