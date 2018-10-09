/**
 * 使用 Array.includes 替代 Array.indexOf
 */
'use strict';

const characters = [
	'ironman',
	'black_widow',
	'hulk',
	'captain_america',
	'hulk',	
	'thor'
];

console.log(characters.indexOf('hulk'));		// 2
console.log(characters.indexOf('batman'));		// -1


console.log(characters.includes('hulk'));		// true
console.log(characters.includes('batman'));		// false