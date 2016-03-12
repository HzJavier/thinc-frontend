
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> refs/remotes/origin/master
function propExercise(inputObj,property){
	return inputObj[property];

}

inputObj={
	siren:"green",
	cup:"white",
	desk:"brown"
}

// propExercise(inputObj,'cup'); //cup
console.log(inputObj);
<<<<<<< HEAD


var myObj={
	// methodOne=function(userDetails,dateOfBirth)
userDetails:{
	// userName:"Mara";
	email:"mara@empresa.com",
	dateOfBirth:new Date (2001,01,01),
     calcAge: function (){
     	var birthYear= this.dateOfBirth.getYear();
     	var currentYear= new date().getYear();
     	return currentYear-birthYear;

     }
}
}

// function _calculateAge(birthday) { // birthday is a date
//     var ageDifMs = Date.now() - birthday.getTime();
//     var ageDate = new Date(ageDifMs); // miliseconds from epoch
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// calcAge(dateString);

// function calcAge(dateString) {
//   var birthday = +new Date(dateString);
//   return~~ ((Date.now() - birthday) / (31557600000));
// }
// console.log(calcAge)

var currentHeight=$('.detail-wrapper').css('height');
$('.detail-wrapper').css('height',parseInt(currentHeight)/2);
currentHeight=$('.detail-wrapper').css('height');

=======
=======
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
>>>>>>> origin/master
>>>>>>> refs/remotes/origin/master
