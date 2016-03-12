/**
 * Defining functions
 */
function myFunc() {
  console.log(arguments[2]);
}

 myFunc("this is arg 1", "this is arg 2", "3", "4");

 /**
  * Object literal notation
  */
var myApp = {
  myObj: {
    property1: "some property",
    property2: "ANOTHER property",
  },
  someArray: [1, 2, 3]
};

console.log(myApp.myObj.property1);
console.log(myApp.myObj["property2"]);

function getProperty (input, property) {
  return input[property];
}
