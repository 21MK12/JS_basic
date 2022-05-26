//  1 Функции

//greet2('Майкл')
// greet('Стефания')

// function Expression
//  переменные с даной функцией можно вызывать только после инициализации даной функции
// const greet2 = function greet2(name){
//     console.log('Привет 2 - ', name)
// }
//  function Declaration
//  можно вызывать функцию в любой части кода
// function  greet(name){
//     console.log('Привет - ', name)
// }
// console.dir(greet);
//  функции в джаваскрипте это объекты
//
//  2 Анонимные функции
// let counter = 0
// const interval= setInterval(function (){
//     if(counter ===5) {
//         clearInterval(interval) //clear timeout
//     } else{
//     console.log(++counter)
//     }
// }, 1000)

// 3 Стрелочные функции

// function greet(name) {
//     console.log('Привет - ', name)
// }
//
// const arrow = (name, age) => {
//     console.log('Привет - ', name, age)
// }
// arrow('Nick')
//
// arrow2 = name => console.log('Привет' + name)
// arrow2('Dred')

// 4 Параметры по умолчанию

// const sum = (a = 40, b = a * 2) => a + b
// console.log(sum())
//
// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }
//
// const ress =sumAll(1, 2, 3, 4, 5, 6, 7, 8)
// console.log(ress)

// 5 Замыкание

// function createMember(name){
//     return function (lastName){
//     console.log(name + lastName)
//     }
// }
//
// const logWithLastName = createMember('Michael')
// console.log(logWithLastName('Borisov'))
// console.log(logWithLastName('Lahno'))