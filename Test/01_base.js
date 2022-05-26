// alert('Do something!');
// var i =10;
// let c;
// const lastname='GANJA';
// const a = 10;
// const b = 12;
// let f = 7;
//  f+=a;
//  console.log(f)
//условные операторы
// const courseStatus = 'ready'; // ready, fail, pending
// if(courseStatus === 'ready'){
//  console.log('курс готов и его можно проходить')
// } else if (courseStatus==='pending'){
//  console.log('курс пока находиться в разработке')
// } else{
//  console.log('курс не получился')
// }

// const isReady = false;
// if(isReady){
//  console.log('Все готово!')
// } else {
//  console.log('Все не готово!')
// }
// Тернарное выражение
// isReady ? console.log('Все готово') : console.log('Все не готово');

// const num1 =42; //number
// const nun2 ='42';//string
// console.log(num1 == nun2);
//== не проверяет типы данных и приводит их к одной строке
//=== сначала проверяет сначала типы данных

// Функции
// function calculateAge(year) {
//  return 2022 - year
// }
// //console.log(calculateAge(1993));
//
// function logInfoAbout(name,year){
//  const age = calculateAge(year)
//  if(age>0){
//   console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//  } else {
//   console.log('Вообще-то это уже будущее')
//  }
//
// }
//
// logInfoAbout('Hellen', 1998);
// logInfoAbout('Nick', 2030);

// Массивы
// const cars= ['Мазда', 'Мерседес', 'Форд'];
// const cars = new Array('Мазда', 'Мерседес', 'Форд');
// console.log(cars);

// console.log(cars.length)
//cars[0] ='Porsche'  можно изменить єлемент массива, хотя масив был указан как константа
// cars[cars.length] = 'Mazda' // добавление в конец масива
// console.log(cars);

//Циклы
// const cars= ['Мазда', 'Мерседес', 'Форд'];

// for (let i =0; i <cars.length; i++){
// const car = cars[i]
//  console.log(car)
// }

// for(let car of cars){
//  console.log(car)
// }

// Объекты

const person = {
 firstName: 'Michael',
 lastName: 'Borisov',
 year: 1993,
 languages: ['UA','EN','ru'],
 hasWife: false,
 greet: function () {
  console.log('greet from person' )
 }
}
console.log(person.firstName);
const key = 'year';
console.log(person[key]);
person.hasWife = true;
console.log(person)
person.isProgramer = true;

person.greet();