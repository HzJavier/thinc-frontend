
var inputObj = {
	first: "first prop",
	second: "second prop",
	third: "third prop"
};

function getProperty(inputObj, property){
	console.log(inputObj[property]);
}

getProperty(inputObj, "first");