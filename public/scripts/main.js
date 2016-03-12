
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
 * User
 */
var myUser = {
  username: 'hzjavier',
  email: 'example@gmail.com',
  birthDate: '90/09/09',
  getAge: function () {
    // Calculate age here
  }
};
