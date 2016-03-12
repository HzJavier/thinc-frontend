function getProperty(inputObj, property){
  return inputObj[property];
}

/*
* Normal and literal declaration
*/
inputObj = {
  first: 'first property',
  second: 'second',
  third: 'third'
}

/*
* declaring and scope for just my variables
*/
var myScope = {
  inputObj: {
    first: 'first property inside the scope',
    second: 'second',
    third: 'third'
  },
  //properties can be functions
  myFunction: function(){
    console.log('function inside the scope');
  }
};

var mySelf = {
  username: 'chavi',
  email: 'john.doe@example.com',
  birth: new Date("October 20, 1980 12:00:00"),
  age: function(){
    // get current Year from Date() and take the current birth from the object
    return new Date().getYear() - this.birth.getYear();
  }
};

console.log(getProperty(inputObj, 'third'));
console.log(getProperty(myScope.inputObj, 'first'));
console.log(mySelf.age());
