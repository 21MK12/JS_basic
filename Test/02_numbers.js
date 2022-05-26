// 1 Number
// const num = 42;
// const float = 31.2314;
// const pow = 10e3
//
// console.log('MAX_SAFE_INTEGER',Number.MAX_SAFE_INTEGER);
// console.log('Math.pow',Math.pow(2,53)-1);
// console.log('MIN_SAFE_INTEGER',Number.MIN_SAFE_INTEGER);
// console.log('MAX_VALUE',Number.MAX_VALUE);
// console.log('MIN_VALUE',Number.MIN_VALUE);
// console.log('POSITIVE_INFINITY',Number.POSITIVE_INFINITY);
// console.log('NEGATIVE_INFINITY)',Number.NEGATIVE_INFINITY);
// console.log('1/0',100/0);
// console.log('Number.NaN',Number.NaN); // Not A Number
// console.log(typeof NaN);
// const weird = 2/undefined;
//
// const stringInt = '40';
// const stringFloat = '40.42';
// console.log(Number.parseInt(stringInt));
// console.log(Number(stringInt)+2);
//
// console.log(parseFloat(stringFloat) +2);

// console.log(0.4 + 0.2);
// console.log((0.4 + 0.2).toFixed(1))

// 2 BigInt в конце числа нужно указать n
// console.log(typeof 9007199254740991999999n)
// console.log(9n -2) error
// console.log(9n -BigInt(2));
// console.log(parseInt(9n)-2);

// 3 Math

// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.sqrt(3))
// console.log(Math.abs(-42))
// console.log(Math.floor(3.4))
// console.log(Math.ceil(3.4))

// Example

function getRandomBetween(min, max){
return Math.floor(Math.random() * (max-min) + min);
}

console.log(getRandomBetween(12, 21));