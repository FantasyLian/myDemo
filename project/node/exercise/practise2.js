// Lambdas（匿名）箭头函数

function namedFunction(a, b) {
    return a + b;
}

const Lambdas = (a, b) => a + b;

// first-class functions (头等函数)
const handler = () => console.log('I am function');

document.addEventListener('click', handler)

// higher-order functions (高阶函数)
const firstOrder = () => console.log('First order strikes!');

const higherOrder = whoStrickesBack => whoStrickesBack();

higherOrder(firstOrder)

// unary functions 一元函数