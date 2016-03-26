// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	// var allHTML = $("html").html(); 
	// var doc = this.document; 
	var results = [];  
	var object = this.document.children[0].children; 

	// } else if (object.className === className) {
	// 	results.push(object.className); 
	// } 
	// console.log(object); 
	// for(var i = 0; i < object.length; i++) { 
	// 	if(object[i].length < 1 || undefined) {
	// 		return; 
	// 	} else {
	// 		console.log("no children",object[i]);
	// 		return getElementsByClassName.call(object[i], className); 
	// 	}
	// }
	for(var i = 0; i <object.length; i++) {
		console.log("object[i]", object[i]);
		console.log("children", object[i].children); 
		if(object[i] !== undefined || object[i].children !== undefined) {
			results.push(lookIntoColl(object[i], className));; 
		}
	}
	console.log("results", results); 
	return results; 
	// return getChildNodes(object);  
}; 

function lookIntoColl (item, className) {
	
			if (item.className === className) {
				return item; 
			} else {
				if(item.children) {
					return lookIntoColl(item.children, className); 
				}
			} 
		}
	
	





// [body.targetClassName, div.targetClassName] "expectedArray"