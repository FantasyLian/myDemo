/**
 * 使用 Array.find 替代 Array.filter
 */
'use strict';

const characters = [
	{ id: 1, name: 'ironman' },
	{ id: 2, name: 'black_widow' },
	{ id: 3, name: 'captain_america' },
	{ id: 4, name: 'captain_america' }
];


function getCharacter(name) {
	return character => character.name === name;
}

console.log(characters.filter(getCharacter('captain_america')));
// [ { id: 3, name: 'captain_america' },
//   { id: 4, name: 'captain_america' } ]


console.log(characters.find(getCharacter('captain_america')));
// { id: 3, name: 'captain_america' }
