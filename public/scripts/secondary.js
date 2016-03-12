var personObj = {
	age: function(){
		var date = new Date();


		return date.getFullYear() - this.dob.getFullYear();
	},
	username: "Lekx",
	email: "link_mx@live.com",
	dob: new Date(1989,09,03),

}

console.log(personObj.age());