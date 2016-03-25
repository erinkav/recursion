// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var results = []; 
	// var allHTML = $("html").html(); 
	// var doc = this.document; 
	var object = this.document.childNodes[1];
	// console.log(object); 
	// console.log(typeof object);
	// console.log(Array.isArray(object)); 
	if(object.className === className) {
		results.push(object.className); 
	} 
	if(object.childElementCount === 0 || object.childElementCount == "") {
		return results;
	} else {
		for(var key in object) {
			if(object.childNodes) {
				console.log("before", object); 
			object = object[key];
			console.log("after", object); 
			return getElementsByClassName.apply(object, className); 
			}
		}
	} 
}; 


// [body.targetClassName, div.targetClassName] "expectedArray"