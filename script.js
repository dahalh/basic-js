//Object, property and method

// Object

// const person = (f, l) => {
//     return{
//     firstName: f,
//     lastName: l,
//     say (){
//         return `hi my name is ${this.firstName} ${this.lastName}`;
//     },
//     };
//  };

//  const p1 = person("John", "Doe");
//  const p2 = person("John2", "Doe2");
//  const p3 = person("John3", "Doe3");

//  console.log(p1);
//  console.log(p1.firstName);
//  console.log(p2.lastName);
//  console.log(p3.say());

// class Animal {

//     constructor(f, l) {
//         this.fName = f;
//         this.lName = l;
//     }

//     type(){

//     }

//     speak(){
//         return `Hey there, my name is ${this.fName} ${this.lName}`;
//     }

//     eat(food){
//         return `${this.fName} likes to eat ${food}`;
//     }

//     bio(){
//         return `person very long bio ....`
//     }
// }

// class Profession extends Person{

//     job(){
//         return `${this.fName} is a student`
//     }

// }

// const himanshu = new Person("Himanshu", "Dahal");
// console.log(himanshu.bio())

// const p1 = new Profession("John", "Doe");
// console.log(p1.job());

// const p1 = new Person("John", "Doe");
// const p2 = new Person("Jdsdsdhn", "dsdsd");

// p1.age =20;
// console.log(p1);
// console.log(p1.speak());

// console.log(p2);
// console.log(p2.speak());


// FUNDAMENTAL PROGRAMMING

// const add = (a, b) => a + b;
// const multi2 = a =>{ 

//     const result = a*2;

//     return result;

// };

// let i = 0;
// const counter = () =>
// {
//     return i++;
// };

// console.log(add(4,5));
// console.log(multi2(4,5));

// console.log(counter());
// console.log(counter());
// console.log(counter());

// const speak = (f) => {
//     return `${f} is speaking`
// };

// console.log(speak("Himanshu"));

// const calc = () => a =>{
//         return a + 5;
// };


// const calc = () => {
//     const adder5 = a => {
//         return a + 5;
//     };

//     return adder5;
// };


// const f1 = calc();
// console.log(f1);
// console.log(f1(5));
// console.log(f1(15));
// console.log(f1(25));
// console.log(f1(35));
// console.log(f1(45));



let i = 1;
// debugger;
const multiplier2 = num => {
    console.log(num * i);
    // i = i +2
    i++;


    if(i == 20){
        return;
    }
    multiplier2(num);
};

multiplier2(8);