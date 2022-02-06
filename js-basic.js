// alert("single line comment");

/*multi line
comment
*/

// variable declaration

//  var, let, const

// var firstName = "John";
// let lastName = "Smith";
// const dob = 1990;

// firstName = "Sam";
// lastName = "Doe";

// console.log(firstName);
// console.log(firstName, lastName, dob);
// console.log(lastName);
// console.log(dob);

//Js- operators
// arithmetic

// let val =20;
// let val2 =3;


// const ans = val + val2;
// const ans = val - val2;
// const ans = val * val2;
// const ans = val / val2;
// const ans = val % val2;
// const ans = val ** val2;
// val++;
// val--;

// Comparisons
// let val = 20;
// let val2 = 20;

// const ans = val == val2;
// const ans = val > val2;
// const ans = val == val2;

// console.log(ans);

// Data types

// let val = 21; //number
// let val2 = "himanshu"; //string
// let isIt = true; //boolean
// let address; //UNDEFINED

// let value = val;
// val = 30;

// console.log(typeof val, typeof val2, typeof address, typeof age ,typeof isIt);

// Reference types
//-- Object, array, function

//object
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 21,
// }

// Array
// const languages = ["CSS", "HTML", true, 12, [54, "dds"], {name: "john"}
// ];

// function

// function add(){
//     console.log(5+6);
// }

// ES6
// const add = () => {
//     console.log(5+ 6 + 5);
// };
// const add = (a, b) => console.log(a + b);
// const add = (a, b) =>  a + b;

// const ans = add(5,6);
// console.log(ans);


// Math Object

// const answer = Math.PI;
// 4.7
// const answer = Math.round(4.7);
// const answer = Math.floor(4.9); //4
// const answer = Math.ceil(4.1); //5
// const answer = Math.sqrt(25);
// const answer = Math.pow(5, 2);
// const answer = Math.min(0,545,985, -6, 54, 788, -696);
// const answer = Math.max(0,545,985, -6, 54, 788, -696);
// const answer = Math.random(); //0 -0.9
// console.log(answer);


// const hungry = false;
// if(hungry){
//     //run
//     console.log("eat pizza");
// }

// const age = 16;
// const gender = "female"

// if(age > 18){
//     console.log("Welcome to the pub");
// }

//logical operator --> &&, ||, !, tenary

//IF ELSE CONDITION
// if(age >= 18 && gender ==="female"){
//     console.log("Welcome to the pub");
// } else {
//     console.log("You are not allowed to enter");
// }

// if(gender != "female") {
//     console.log("Welcome to the park");
    
// }

// const animal = "bird"

// if(animal == "cat"){
//     console.log("meow");
// } else if (animal == "dog"){
//     console.log("woof");
// } else if (animal == "cow"){
//     console.log("moo");
// } else if (animal == "bird"){
//     console.log("chirp");
// }else {
//     console.log("cdfeffe efe rer");
    
// }

//TENARY

// const type = "dog";

// if("human"){
//     console.log("Allowed in the park");
// } else {
//     console.log("not allowed to enter");
// }

// type == "human" 
// ? (console.log("Allowed in the park"))
// : ("Not allowed to enter");

// Switch
//  const animal = "cowwwwww";

//  switch(animal){
//     case "cat" :
//         console.log("meow");
//         break;
//     case "dog" :
//         console.log("woof");
//         break;
//     case "bird" :
//         console.log("chirp");
//         break;
//     case "cow" :
//         console.log("mooo");
//         break;
//     default:
//         console.log("ssasasas asadfdfdfs");
//  }

//Error Handling
// try{
//     //code
//     const fname ="John";

//     // fname = "John Doe";

//     // throw new Error("Something went wrong");
//     console.log(fname);
// }catch(error){
//     //catch if you get error
//     console.log(error);
// }finally{
//     //always run at the end
//     console.log("code execution time", Date());
// }

//SCHEDULING

// function name(){
//     
// }

// const sayHey = () =>{
//     console.log("Hi there");
// }

// console.log("my turn to execute code...");

// console.log(sayHey());


// setTimeout(()=>{
//     console.log("hi there 2");
// },3000)
// setTimeout(sayHey, 3000);

// let i = 0;
// const timer = setInterval(() => {
//     console.log(i++);
// }, 1000);

// clearInterval(timer);

// ES6

// let name = "himanshu"
// const sayHey = () => {
//     let name = "Jane";
//     console.log(name);
// };

// const sayBye = () => {
//     let name= "Sam";
//     console.log(name);
// };

// sayHey();
// sayBye();

// console.log(name);

// const sayHey = (name, age) => {
//     const str = `
//     ${name} say hey. and ${age} years old
//     `;
//     console.log(str);
//     // console.log(name + " say hey and age " + age + " years old");
// };

// sayHey("himanshu", 16);
// sayHey("john", 20);

// const person = {
//     name: "john",
//     age: 20,
//     mobile: 123456,
//     email: "sdsd@email.com",
// };
// const person1 = {
//     name: "Sam",
//     age: 20,
//     mobile: 123456789,
// };

// const intro = ({name, age, mobile, email = "no email"}) => {

//     // const {name, age, mobile} = obj;
//     console.log(name, age, mobile, email);
// };

// intro(person);
// intro(person1);

// const {email, ...newPerson} = person;
// console.log(person);
// console.log(email);
// console.log(newPerson);

// const fruits = {
//     best: "banana",
//     worst: "apple",
// };

// const personWithFruits = {...person1, ...fruits};
// console.log(personWithFruits);


//LOOPS -> for, for/in, for/of, while, do while

// const fruits = ["banana", "apple", "orange", "pineapple"]

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

//FOR IN LOOP -> LOOP THROUGH OBJECTS

// const person = {
//     name:"john",
//     age: 20,
//     mobile: 544646,
    
// }

// for (const key in person) {
//     console.log(key);
// }

//FORM OF FOR IN LOOP IS FOR THE ARRAY

// for(const itm of fruits){
//     console.log(itm);
// }

// const fruits = ["banana", "apple", "orange", "pineapple"]

//WHILE LOOP

// let i = 0;
// while (i < 10) {
//     console.log("run this code", i++);
// }

// DO WHILE LOOP

// do {
//     i++;
//     if (i % 2 != 0) {
//         continue;
        
//     }
//     console.log("run this code", i);
//     // if (i == 5){
//     //     break;
//     // }

// } while (i < 10);

// // console.log("...loop exited at " + i);

// DATA MANIPULATION

//NUMBER

// const a = "5.5a";
// const b = parseInt(a);
// const c = parseFloat(a);

// const c = Number(a);
// const c = +a;
// const c = 123_456_789_101_112_131_415;

// SAFE NUMBER
// -2^53-1 to 2^53-1

// const c = isNaN("55a"); //true
// const c = isNaN("dds"); //true
// const c = isNaN(55); //false
// console.log(c, typeof c);

// STRING
// const str = "Lorem sit IPsum, dolor. sit amet ifd";

// const val = str.length;
// const val = str.toUpperCase();
// const val = str.toLowerCase();
// const val = str.indexOf("i");
// const val = str.lastIndexOf("i");
// const val = str.replace("sit", "home");

// const val = str.slice(10, 15) + " add to the end";
// const val = str.substring(10,15);
// const val = str.charAt(10);
// const val = str.split(".");

// console.log(str);
// console.log(val);

//ARRAY

// const fruits = ["banana", "apple", "orange", "grape", "10-jan", "10-april"];

// const val = fruits.push("Pineapples");
// const val = fruits.unshift("Mango");

// const val =  fruits.pop()
// const val = fruits.shift()

// const val = fruits[2];
// fruits[2] = "pineapple";

// const val = fruits.splice(1,2);
// const val = fruits.splice(2,0, "pineapple");
// const val = fruits.splice(2,0, "pineapple");

// const val = fruits.slice(1,3);

// fruits.sort();
// fruits.reverse();

// const val = fruits.indexOf("banana");

// console.log(val, fruits);

// console.log(fruits);

// const newArg = [...fruits];
// newArg[2] = "pineapple";

// console.log(newArg);
// console.log(fruits);

//Array loops
//map, forEach, filter, reduce, every, find

//Map
// const fruits = ["banana", "apple", "orange", "pineapple"];


// const mapFruits = fruits.map((item, i)=>{
//     // console.log(i, item);
//     if (item == "banana") {
//         return "monkey";
//     }
//     return item.toUpperCase();
// });
//  console.log(fruits, mapFruits);

//forEach does not return new array
// const newArg = fruits.forEach((fruit, i)=> {
//     console.log(fruit, i);
//     return fruit;
// });
// console.log(fruits, newArg);

//filter returns new array of items that pass the test
// const fruits = ["banana", "apple", "orange", "pineapple"];
// const filterArg = fruits.filter((item, i)=> item.includes("p"));

//FIND
// const findArg = fruits.find(item => item.includes("p"));

//SOME -> returns true or false
// const findArg = fruits.some(item => item.includes("p"));
//EVERY
// const findArg = fruits.every(item => item.includes("p"));

// console.log(fruits, findArg);

// const money = [445, 54, 2, 4, 5, 85, 6, 7, 8, 9, 10];
//reduce returns a single total value
// const totalBalance = money.reduce((subTotal, val) => subTotal + val, 5);
// const totalBalance = money.reduce((acc, n) => console.log(acc, n), 100);
// const totalBalance = money.reduce((acc, n) => {
//     return acc + n;
// }, 0)

// console.log(fruits, totalBalance);



// ==========================

// OBJECT
// const person = {
//     name: "john",
//     age: 20,
//     mobile: 234333434,
//     fruits: ["banana", "apple", "orange", "grape"],
// };

// person.lastName = "Sam";

// const { fruits, ...newArg } = person;

// console.log(person, newArg);

// const numarg = [1, 2, 3, 4 ,5];

// const speak = ({name, say, ...rest}) => {
//     console.log("unused data", rest);
//     return `${name} would like to say ${say}`;
// };

// const answer = speak(person);

// const p2 = {...person, add: "Sydney"};

//console.log(person, p2);

//DATE

// const today = Date.now();
// const today = new Date();

// console.log(today.toISOString());
// console.log(today);
// console.log(today.toDateString());

// const year = today.getFullYear();
// const day = today.getDay();
//  console.log(year, day);


//Challenges

// const randArray = [];
// const numGen = () => {
//     return Math.ceil(Math.random() * 100);
// }

// for(let i=0; i<50; i++){
//     const ranVal = numGen();
//     randArray.push(ranVal);
// }

// randArray.sort((a, b) => b - a);
// console.log("duplicates ==>" ,randArray);

// let duplicate = [...new Set(randArray)];
// duplicate.sort((a, b) => b - a);
// console.log("no duplicates ==> ", duplicate);

//1. Create and array of 50 random numbers from 1 to 100, Dynamically
//2. Sort the array in descending order
//3. get the total value of the array
//4. create arrays for odd and even numbers out of the original array

//1
//  for(let i=1; i<51; i++){
//      const random = Math.ceil(Math.random() * 100);

//       const numbers = [random];
     
//       console.log(numbers);

//       const totalNum = numbers.reduce((acc, n) => {
//         return acc + n;
//     }, 0)
      
//     //  console.log(numbers.sort());
//  }
//   console.log(totalNum);

//1.
// const randomArray = [];
// const randGen = () => {
//     return Math.ceil(Math.random() * 100);
// }
 

// for(let i=0; i<50; i++){
//     const ranVal = randGen();
//     randomArray.push(ranVal);
// }

// //2.
// randomArray.sort((a, b) => b - a);


// //3.

// const total = randomArray.reduce((acc, n) => acc + n, 0);
// const odd = randomArray.filter(n=> n % 2 !==0);
// const even = randomArray.filter(n=> n % 2 ===0);

// console.log("Sorted Array => ", randomArray);
// console.log("Total array sum =>", total);
// console.log("Odd array =>", odd);
// console.log("Even array =>", even);
 

 //1. Create and array of 50 random numbers from 1 to 100, Dynamically

 const numArg = [];
 const min = 1;
 const max = 100;
 const argSize = 50;
 
 
 const randomNum = () => {
   return Math.floor(Math.random() * max + 1)
 }
 
 for (let i = min; i <= argSize; i++){
   const num = randomNum()
   numArg.push(num)
 }

 //2. remove the duplicate value

 const uniqueArg = []

 for(let i = 0; i < numArg.length; i++){
   const num = numArg[i]
 
   if(!uniqueArg.includes(num)){
     
     uniqueArg.push(num)
   } else {
     console.log(num, "Already exists")
   }
 }
 
 console.log(numArg.sort(), uniqueArg.sort(), uniqueArg.length)

 //1. create an array of 50 from 1 to 100 unique random numbers


//  function hey() {
//      console.log("hey");
//  }

//  const hey = () =>{
//      console.log("heyyerrerer");
//  }
//  hey();


