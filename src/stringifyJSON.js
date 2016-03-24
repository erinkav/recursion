// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {//How do I want to recur this. Each value needs to be an individual string. I could check type and then stringify. cycle thorugh every value and return the string version. 
  // your code goes here
  var result = "";
  var value; 

  if(typeof obj !== "object") {
  	console.log(result); 
  	result = result.concat(obj.toString()); 
  	console.log(result); 
  	return result;
  } else if (obj === null) {
  	result = result.concat("null"); 
  }else if (typeof obj === "function"||"undefined") {
  	return;
  } else {
  	if(Array.isArray(obj)) {
  		value = obj.shift;
  		console.log(value); 
  		console.log(result); 
  		return stringifyJSON(value); 
  	} else {
  		for(value in obj) {
  			console.log(result); 
  			return stringifyJSON(obj[value]); 
  		}
  	}
  }
};



 //  else if(typeof obj === "object") {
 //  		if (Array.isArray(obj))
	//   	for(var key in obj) {
	//   		if(typeof obj[key] === "function" || "undefined") continue; 
	//   		else {
	//   			console.log(result, obj[key]); 
	//   		}
	//   	}
	// }
 //  }
 //  console.log(result);




  // var value = obj.shift(); 
  // for (var i = 0; i<obj.length; i++) {
  // 	if(obj.length === 0) {
  // 		return result; 
  // } else {
	 //  	result = result + obj[i].toString();
	 //  	console.log(result);
	 //  	return stringifyJSON(obj); 
  // }
  // }


// "["Hello world",[],[8],[],[8,"hi"],[1,0,-1,-0.3,0.3,1343.32,3345,0.00011999999999999999],[8,[[],3,4]],[[[["foo"]]]],{},{"a":"apple"},{"foo":true,"bar":false,"baz":null},{"boolean, true":true,"boolean, false":false,"null":null},{"a":{"b":"c"}},{"a":["b","c"]}]"