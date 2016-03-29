// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className){
	
var getElementsByClassName = function(className){
	var results = [];  
	var object = this.document.children

	function elementFinder(item, name) {
		for (var i = 0; i<item.length; i++) {
			if(item[i] !== undefined && item[i].children !== undefined) {
				if(item[i].classList.length > 1) { 
					for(var j =0; j< item[i].classList.length; j++) {
						if(item[i].classList[j] === name) {
							results.push(item[i]); 
						}
					}
				} else if(item[i].className === name) { 
					results.push(item[i]); 
				}
				elementFinder(item[i].children, name); 
			}
		}
	};

	elementFinder(object, className); 
	return results;  
}; 
// [body.targetClassName, div.targetClassName] "expectedArray"