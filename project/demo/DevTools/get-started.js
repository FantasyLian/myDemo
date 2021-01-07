function onClick() {
	if(inputsAreEmpty()) {
		label.textContent = 'Error: one of both inputs are empty.';
		return;
	}
	updateLabel();
}

function inputsAreEmpty() {
	if(getNumber1() === '' || getNumber2() === '') {
		return true;
	} else {
		return false;
	}
}

function updateLabel() {
	let addend1 = getNumber1();
	let addend2 = getNumber2();
	let sum = addend1 + addend2;
	label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}

function getNumber1() {
	return inputs[0].value;
}

function getNumber2() {
	return inputs[1].value;
}

let inputs = document.querySelectorAll('input');
let label = document.querySelector('p');
let button = document.querySelector('button');
button.addEventListener('click', onClick);