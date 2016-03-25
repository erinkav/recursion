// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var results = []; 
	var allHTML = $("html").html(); 
	var elementList = allHTML.split("<");
    for (var i = 0; i<elementList.length; i++) {
    	if(elementList[i].indexOf(className) > 1) {
    		console.log(elementList[i]); 
    		var element = elementList[i].split(" ")[0];
    		results.push(element+"."+className); 
    	} 
    }

	console.log(results); 
}; 


// [body.targetClassName, div.targetClassName] "expectedArray"