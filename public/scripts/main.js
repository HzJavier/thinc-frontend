
/*
var inputObj = {
	first: "first prop",
	second: "second prop",
	third: "third prop"
};

function getProperty(inputObj, property){
	console.log(inputObj[property]);
}

getProperty(inputObj, "first");
/**
 * Defining functions
 */
 /*
function myFunc() {
  console.log(arguments[2]);
}

 myFunc("this is arg 1", "this is arg 2", "3", "4");

 /**
  * Object literal notation
  */
  /*
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
*/
var person = {
	username : "BARUC",
	email : "sjdhj",
	birth : "2006,6,6",
	years : 12,
	calculateAge: function (){
		var birthday = new Date(this.birth);
		console.log(birthday);
		var today = new Date();
		var years = today.getFullYear() - birthday.getFullYear();
		birthday.setFullYear(today.getFullYear());
		if (today < birthday)
		{
		    years--;
		}
		this.years = years;
		return years;
	}
}

person.birth = "10/30/1993";
console.log(person.calculateAge());
console.log(person.years);
