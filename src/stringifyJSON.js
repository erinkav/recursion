// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {//How do I want to recur this. Each value needs to be an individual string. I could check type and then stringify. cycle thorugh every value and return the string version.
  // your code goes here
	var theString = '';
	if(Array.isArray(obj)) {
		obj.forEach(function(item) {
			theString += stringifyJSON(item) + ",";
		}); 
		return "["+ theString.slice(0,-1)+"]";
	} else if (typeof obj === "object" && obj !== null) {
		for(var key in obj) {
			theString += baseCase(key) + ":" + stringifyJSON(obj[key])+","; 
		}
		return "{"+ theString.slice(0,-1)+"}"; 

	} 

	return baseCase(obj); 
}; 

// "[9"Hello world"[][8][][8,"hi"][1,0,-1,-0.3,0.3,1343.32,3345,0.00011999999999999999],[8,[[],3,4]],[[[["foo"]]]],{},{"a":"apple"},{"foo":true,"bar":false,"baz":null},{"boolean, true":true,"boolean, false":false,"null":null},{"a":{"b":"c"}},{"a":["b","c"]}]


function baseCase(val) {
	if (typeof val === "string") {
		return '"'+val+'"';
	} 
	return String(val); 
}; 

