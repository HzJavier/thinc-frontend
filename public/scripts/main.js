console.log('hola')

function getProperty(input, property){
   return input[property];
}

myObj = {
  property1: "hola",
  property2: "adios"
};

getProperty(myObj,"property1");
