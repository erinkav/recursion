// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var results = []; 
	var allHTML = document.documentElement.innerHTML; 
	console.log(allHTML, "real way? "); 
	var rest = $("title").outerHTML; 
	console.log(rest); 
}; 


// [body.targetClassName, div.targetClassName] "expectedArray"