function myFunc(){
	console.log('hola');
}

myFunc("1", "3", "5");

var myObj = {
	property1: "some property",
	property2: "Another property"
};


console.log(myObj.property);
console.log(myObj["property2"]); 


function getProperty(inputObj, property){
	return inputObj[property];
}


inputObj = {
	first: 'Fisrt prop',
	second: 'Second prop',
	third: 'Third prop'
};

getProperty(inputObj, 'second');

console.log(inputObj);

var myApp = {
	myObj: {
		property1: "some property",
		property2: "Another property"
	},
	someArray: [1, 2, 3],
	sayHello: function(){
		console.log('Hello!!');
	}
};

//adding new properties
myApp.newProperty = "New property";


//deleting properties
delete myApp.someArray;


myApp.sayHello();

var secondApp = {
	username: "Miriam",
	email: "mcanteroangel@gmail.com",
	dateOfBirth: new Date(1993, 07, 25),
	calculateAge: function(){
		var year =  new Date(). getYear() - this.dateOfBirth.getYear();
		return year;
	}
}

secondApp.calculateAge();

function User(config) {
	config = config || {};
	//if(config === undefined){	Doble igual: Similares (2 int, 2 double)	Triple igual: exactamente iguales
	//	config = {};
	//}
	this.username = config.username || '';
	var email = config.email || '';
	var dateOfBirth = config.dateOfBirth || new Date();
	this.calculateAge = function(){
		var year =  new Date(). getYear() - dateOfBirth.getYear();
		return year;
	};
}

var miriam = new User();
var itzel = new User({
	username: 'Itzel'
});

User.prototype.sayHello = function (){
	return "Hello miriam !";
}

miriam.sayGoodbye = function (){
	return "Bye!!";
};
