'use strict';

//we will add the previous lecture explanation

///////////////////////////////////////
// Constructor Functions and the new Operator

//by convention Constructor Functions  starts with captal letter
//note: we can use  function expresion and function decleration but not arrow function becouse arrow function dosent have thier own 'this keyword'

const Person = function (firstName, birthYear) {
  //console.log(this); //the 'this' keyword is pointed to the empty object {}  at first

  // Instance properties   b/c all this prperty in present in all objects

  this.firstName = firstName; // can also do that this.firstName = fName;  as we want
  this.birthYear = birthYear;

  //console.log(this); //the 'this' keyword is pointed to the created object with the data  Object { firstName: "Jonas", birthYear: 1991 }..all the created objects

  // Never to this!   instance method    this is not good practice  b/c if wer have 1000 objects  the we will make 1000 methods   but we will fix this in next leacture using prototype
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas); //Object { firstName: "Jonas", birthYear: 1991 }

//at first when we create the object using   Constructor Functions and the new Operator  four things has happened behind the sciene

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

//we can create objects as much as we want
const matilda = new Person('Matilda', 2017); //Object { firstName: "matilda", birthYear: 2017 }
const jack = new Person('Jack', 1975); //Object { firstName: "Jack", birthYear: 1975 }

console.log(jonas instanceof Person); //true      // if  its not present it returns false
