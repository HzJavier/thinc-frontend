console.log('hola')

function getProperty(input, property){
   return input[property];
}

myObj = {
  property1: "hola",
  property2: "adios"
};

getProperty(myObj,"property1");

var user = {
  userName: "User001",
  email: "user001@hotmail.com",
  dateOfBirth: new Date(1990,11,11),
  calculateAge: function(){
    //function do...
    return new Date().getYear() - this.dateOfBirth.getYear();
  }
};

console.log(user);
