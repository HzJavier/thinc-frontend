
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

