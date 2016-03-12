/**
 * Defining functions
 */
function myFunc() {
  var foo = "foo";
  bar = "bar";
  console.log(arguments[2]);
}

myFunc();

 /**
  * Object literal notation
  */
var myApp = {
  myObj: {
    property1: "some property",
    property2: "ANOTHER property",
  },
  someArray: [1, 2, 3],
  sayHello: function () {
    console.log('Hello!!');
  }
};

// adding new properties
myApp.newProperty = "This is a new property";

// deleting properties
delete myApp.someArray;

myApp.sayHello()

function getProperty (input, property) {
  return input[property];
}


/**
 * The date object
 */
var myDate = new Date() ;

/**
 * User
 */
var myUser = {
  username: 'hzjavier',
  email: 'example@gmail.com',
  birthDate: new Date(1990, 09, 09),
  getAge: function () {
    // Calculate age here
    var birthYear = this.birthDate.getYear();
    // var currentDate = new Date();
    // var currentYear = currentDate.getYear();
    var currentYear = new Date().getYear();
    return currentYear - birthYear;
  }
};

/**
 * SCOPE & Hoisting
 */
function fooFunction () {
  var bar = "bar";
  var foo;

  if (bar === "bar") {
    foo = "foo";
    console.log(foo);
  }

    console.log(foo);
}

/**
 * Prototypal inheritance
 */
function User(config) {
  // if (config === undefined) {
  //   config = {};
  // }
  config = config || {};

  this.username = config.username || ''; 
  var birthDate = config.birthDate || new Date();

  this.getAge = function () {
    var birthYear = birthDate.getYear();
    var currentYear = new Date().getYear();
    return currentYear - birthYear;
  };
}

var moises = new User();
var juan = new User({
  username: 'juan_11'  
});

moises.sayGoodbye = function () {
  return "Bye";
};

User.prototype.sayHello = function () {
  return "Hello!";
};
