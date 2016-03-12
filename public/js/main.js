

function getProperty(inputObj, property){
  return inputObj[property];
}

inputObj = {
  first: 'first property',
  second: 'second',
  third: 'thid'
}

console.log(getProperty(inputObj, 'third'));
