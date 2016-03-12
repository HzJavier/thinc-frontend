
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
	methodOne=function(userDetails,dateOfBirth)
userDetails{
	username:"Mara"
	email:"mara@empresa.com"
	dateOfBirth:"01/01/2001"
     calcAge: function()
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