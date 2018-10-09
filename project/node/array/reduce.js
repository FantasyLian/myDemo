/**
 * 使用 Array.reduce 替代 Array.filter 与 Array.map 的组合
 */
'use strict';

const characters = [
	{ name: 'iornman', env: 'marvel' },
	{ name: 'black_widow', env: 'marvel' },
	{ name: 'wonder_woman', env: 'dc_comics' }
];

console.log(
	characters
		.filter(character => character.env === 'marvel')
		.map(character => Object.assign({}, character, { alsoSeenIn: ['Avengers'] }))
);

// [ 
// 		{ name: 'iornman', env: 'marvel', alsoSeenIn: [ 'Avengers' ] },
//   	{ name: 'black_widow', env: 'marvel', alsoSeenIn: [ 'Avengers' ] } 
// ]


console.log(
	characters
		.reduce((acc, character) => {
			return character.env === 'marvel' 
			? acc.concat(Object.assign({}, character, { alsoSeenIn: ['Avengers'] })) 
			: acc;
		}, [])
);

// [ 
//		{ name: 'iornman', env: 'marvel', alsoSeenIn: [ 'Avengers' ] },
//		{ name: 'black_widow', env: 'marvel', alsoSeenIn: [ 'Avengers' ] } 
// ]