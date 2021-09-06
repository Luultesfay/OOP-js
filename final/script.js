'use strict';

/*
///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jonas instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey();

///////////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));


///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();


///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();


///////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


///////////////////////////////////////
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();


///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();


///////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Compuetr Science');
jay.introduce();
jay.calcAge();


///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
*/











'use strict';

//we will add the previous lecture explanation

///////////////////////////////////////
// Constructor Functions and the new Operator

//by convention Constructor Functions  starts with captal letter
//note: we can use  function expresion and function decleration but not arrow function becouse arrow function dosent have thier own 'this keyword'

const Person = function (firstName, birthYear) {
  //console.log(this); //the 'this' keyword is pointed to the empty object {}  at first

  // Instance properties   b/c all this property in present in all objects

  this.firstName = firstName; // can also do that this.firstName = fName;  as we want
  this.birthYear = birthYear;

  //console.log(this); //the 'this' keyword is pointed to the created object with the data  Object { firstName: "Jonas", birthYear: 1991 }..all the created objects

  // Never to this!   instance method    this is not good practice  b/c if wer have 1000 objects  the we will make 1000 methods   but we will fix this in next leacture using prototype
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

//we can add static method to the 'Person' constructor that is only spcific to that constractor ,not in the prototype that every created object access or inherited so this will not be accesed by the created objects matilda or jonas

Person.hey = function () {
  console.log('hey there 😉'); //hey there 😉
};

Person.hey();

const jonas = new Person('Jonas', 1991);
jonas.age = 30; //then we create object jonas and we can add property to it   in this case age

//jonas.hey(); can not access hey()  method becouse hey() its specfic to the  Person constractor not to the object created  also hey() is not on the prototype of jonas object

console.log(jonas); //Object { firstName: "Jonas", birthYear: 1991 age:30}

//at first when we create the object using   Constructor Functions and the new Operator  four things has happened behind the sciene

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

//we can create objects as much as we want
const matilda = new Person('Matilda', 2017); //Object { firstName: "matilda", birthYear: 2017 }
const jack = new Person('Jack', 1975); //Object { firstName: "Jack", birthYear: 1975 }
console.log(matilda);
console.log(jack); //
console.log(jonas instanceof Person); //true      // if  its not present it returns false

Person.prototype.calcAge = function () {
  //Person.prototype is  a prototype of all object that  created by constrauctor function Person .eg(matilda ,jonas  is created by Person costructor and thier prototype is  Person prototype)
  console.log(2037 - this.birthYear);
};
matilda.calcAge();

console.log(matilda);
//note person.protopype  is also have a prototype called Object.prototype

/*
//prototype look up
Object.prototype.behaviour = function () {
  // we say that Person.prototype have  also a prototype  called Object.prototype  so if the created object ( jonas , matilda ..) want to use a method or property first they look up to the person.prototype if they couldnt find it they look to the  Object.prototype of Person.prototype
  console.log(`${this.firstName} is very kind`); //Matilda is very kind    // Jonas is very kind
};
matilda.behaviour();
jonas.behaviour();
console.log(matilda);
*/
//jonas...allobject created has its prototype===>Person.prototype  and Person.prototype also have prototype ===>Object.prototype

console.log(jonas.__proto__); //jonas.__proto__ linked to  person prototype
console.log(Person.prototype);
//Object.prototype is  the top of prototype cain
console.log(jonas.__proto__.__proto__); //jonas.__proto__.__proto__   is linked to Object.prototype   which is the top in the scope chain
console.log(jonas.__proto__.__proto__.__proto__); //null becouse there is no prototaype after object.prototype
console.log(Person.prototype.constructor); //function Person(firstName, birthYear)  itself with whole its value

// lets see array prototype
//all array inherited all the its methods from its prototype
let arr = [1, 2, 4, 5, 2, 4, 3, 4, 5]; // also this means  new Array==[]
console.log(arr.__proto__); // arr can acess all the methodes of Array.prototype
console.log(Array.prototype); //
console.log(Array.prototype === arr.__proto__); //true  becouse  arr is used the prototype of  a buldin function Array.prototype

console.log(arr.__proto__.__proto__); //Object { … }

console.log(arr.__proto__.__proto__.__proto__); //
console.log(Array.prototype.constructor); //function Array()  the function array itself

// so  as we know the  arr can access methods from Array.prototype  so we can set or create or add any method in the Array.prototype and can be acceced by the created arrays from Array contractors eg arr

//lets add unque property to the Array.prototype
Array.prototype.unque = function () {
  return [...new Set(this)];
};
//now lets see arr can use the unque method that is created in its prototype

console.log(arr.unque()); // so indeed it worked

//lets see another eg
console.log([2, 4, 6, 6, 2, 1].unque()); // we create another array and access the unqe method from its prototype

//if we check  Array.prototype we get the method unque  with all the other methods

console.log(Array.prototype); // so we see unque in the list with the bunch of built in methods

// challange 1

/*
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h*/

const Car = function (make, speed) {
  // we first create function constractor car
  this.make = make;
  this.speed = speed;
};
const BMW = new Car('BMW', 120); //we create objet bmw  and mercedes
const Mercedes = new Car('Marcedes', 95);

//we added accelerte method to Car.prototyope in order to use by all objects that created from Car constractor
Car.prototype.accelerate = function () {
  const newSpeed = this.speed + 10;
  console.log(newSpeed); //130  105
};
BMW.accelerate();
Mercedes.accelerate();
//we added break method to Car.prototyope in order to use by all objects that created from Car constractor
Car.prototype.break = function () {
  const newSpeed = this.speed - 5;
  console.log(newSpeed); //115  90
};
BMW.break();
Mercedes.break();

console.log(Car.prototype); // accelalrte and break is added to the Car prtotype so can be acceessd by all object that is created by constractor function Car
console.log(Car.prototype === BMW.__proto__);

// ES6 CLASSES

//CLASSES IN java script are not working like classes in another language(like java c++...)

//there is class expression and class decleration

//class expression
//PersonCl=class{

//}
//classes is special type of functions

// class decleration
class PersonCl {
  constructor(firstName, birthYear) {
    //constructor inside the class is like a method    its the method of this PersonCl  class
    //we can also pass argument to this constractor

    this.firstName = firstName; //'this' will point to the new created  object
    this.birthYear = birthYear;
  }

  // we can also add method to the class like this
  //note methods wrote outside the constrauctor and  written inside class is automatically added to .prototype then all the object created  from that class  can use it

  ///instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`HEY ${this.firstName}`);
  }

  //statc method   that only specifc for the classPerson not in the prototaype of the created objectes
  static hey() {
    console.log('hey there😂'); //hey there😂'
    console.log(this); // pointed to the PersonCl
  }
}

PersonCl.hey(); //hey there😂'

const jessica = new PersonCl('jessica', 1996); //we create a new  object  then the constractor is automatically called , when ever a new object is created

console.log(jessica);
//note     Now, what's important to understand here
//is that all of these methods that we write in the class,
//so outside of the constructor,
//will be on the prototype of the objects and not on the object

jessica.calcAge(); //41
jessica.greet();

console.log(jessica.__proto__ === PersonCl.prototype); // true  becouse jessica prototype is PersonCl.prototype

// we can also add methods to the prototype manually as we did before so all the created objects call use it

/*

PersonCl.prototype.greet = function () {
  console.log(`HEY ${this.firstName}`); //HEY jessica
};

jessica.greet();
*/

// important note about classes

//1. classes is not hoisted
//2. classes are first-class citzens this means we can pass them to functions and return them from functions
//3. classes is excuted in strict mode

////SETTERS AND GETTERS
// every object in java script  can have setter and getters fetures but not that importnat   check video 211

///////static method

//The static keyword defines a static method or property for a class. Neither static methods nor static properties can be called on instances of the class.
// Instead, they're called on the class itself.

//The static keyword  is methods  that is only related or linked to the specific classs or the constructor function   they are not for the created objected becouse they are not exists in thier prototype

//eg  of stattic is  like  Array.from()  that is only accesd to the Array constractor ity self  they are not on the prototype so  arrays cant acess it

//Array.from(document.querySelectorAll('h1')); //[h1]
//but not worked on the other arrays

//[1, 2, 3].from(); // so get type error

//another eg
console.log(Number.parseFloat(12)); //12   this is static  spcific  to the "Number" constractor  not to another numbers
//but not for the below
//console.log('20'.parseFloat()); //"20".parseFloat is not a function

/*Static methods are often utility functions, such as functions to create or clone objects, 
whereas static properties are useful for caches, fixed-configuration, 
or any other data you don't need to be replicated across instances.*/

class ClassWithStaticMethod {
  //static method and static prperty
  static staticProperty = 'someValue';
  static staticMethod() {
    return 'static method has been called.';
  }
}

console.log(ClassWithStaticMethod.staticProperty);
// output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// output: "static method has been called."

////////////// implementing prtotype inheritance  using third way  (object.create)  the previous 2 is using ES6 and using constructor function using new keyword

//object.create

const PersonProto = {
  calcAge() {
    2037 - this.birthYear;
  },

  init(firstName, birthYear) {
    /// this method can setup the DATA AUTOMATICALLY
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const luul = Object.create(PersonProto);
luul.init('luul', 1990);
console.log(luul);
luul.calcAge();

console.log(PersonProto === luul.__proto__); //its is true becouse  the object  PersonProto is the prototype of the created object luul its different
//from previous lecture  prototype of object created from  constructor functions  is not the function prototype
console.log(typeof PersonProto); // object
console.log(PersonProto.__proto__);
console.log(luul.__proto__);

/*1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    console.log(this.speed + 10);
  }
  break() {
    console.log(this.speed - 5);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const Ford = new CarCl('Ford', 120);
Ford.accelerate();
Ford.break();
Ford.accelerate();
Ford.break();
console.log(Ford.speedUS); // 75 we get the speed in mi/h

Ford.speedUS = 50;
console.log(Ford); //we set the speed to new speed  Object { make: "Ford", speed: 80 }

///INHERITANCE BETWEEN CLASSES
//CONASTRUCTOR FUNCTION
//WE will link  both classes prototype

const Human = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Human.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //this.firstName=firstName;  we  can inherit  this property from the Human function constructor instead of writing it
  //this.birthYear=birthYear;
  this.course = course;
  Human.call(this, firstName, birthYear, course); //so 'this' keyword pointed to sudent function
  // becouse we use  method call  and we use the property from the Human constructor function
};

Student.prototype = Object.create(Human.prototype); // we connect the two prtotype of the two function construction using Object.create()  method

//lets add introduce method to the student class    and all  objects can access it
Student.prototype.introduce = function () {
  console.log(
    `my name is ${this.firstName} and i am  born in ${this.birthYear} and i study ${this.course} `
  );
};

const dave = new Student('dave', 1990, 'computer science');
console.log(dave); //Object {course:'computer Science', firstName: "dave", birthYear: 1990 }
dave.calcAge(); //so we can use the method CalcAge()  from Human now
console.log(Student.prototype); //
console.log(dave.__proto__);
dave.introduce(); //my name is dave and i am  born in 1990 and i study computer science

const tiemar = new Student('tiemar', 1998, 'science');
console.log(tiemar);
tiemar.introduce();
tiemar.calcAge(); //39
