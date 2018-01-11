var arr1 = [1,2,3,4,5];// array with the numbers
var arr2 = new Array('syed', 'umair', 21);// array with specified elements
var arr3 = new Array(2);// array of length 2 with undefined elements is created
console.log(arr1.length); //5, length of arr1
console.log(Array.isArray(arr3));//true, to check whether its an array.
arr3.push(33);//3, inserts arr3[2] = 3 and returns new length
arr1.pop();//5, deletes last element from arr1 and returns the element.
arr1.push(5);//5
arr1.concat(arr1,arr2);//returns new array: [1,2,3,4,5,1,2,3,4,5,'syed', 'umair', 21]
arr3.copyWithin(0,2,3);//[33,33,33] 
arr2.every(function(current, index, obj){
	return current != null;
});//true, returns true if all satisfy
arr1.some(function(current, index, obj){
	return current > 4;
});//true, returns true if anyone satisfy
arr3.fill(34,1,2);//[33,34,33]
var arr4 = arr3.filter(function(cur,index,obj){
	if(cur===obj[0]){
		return cur;
	}
});//arr4 = [33,33]
arr4 = arr1.valueOf();//[1,2,3,4,5]
arr4.unshift(5,4,3,2,1);//10, new length
arr4.shift();//5
arr2.toString();//"syed,umair,21"
arr1.find(function(curr,index,obj){
	return curr >= obj[obj.length-1];
});//5
arr1.findIndex(function(curr,index,obj)}{return curr>18});//-1, no such element.
arr2.forEach( function(element, index, obj) {
	console.log(index+' : '+element +' of '+obj.length);
});//0 : 1 of 9....
arr2.indexOf('umair', 1);//1
arr1.join('"');//"1"2"3"4"5"
arr3.lastIndexOf(33,1);//0
console.log(arr1.map(function(el,index,obj){
	return el*el+obj.length; 
}));//6,9,...
arr1.reduce(function(tot,cur){
	return tot + cur;
}, 0);//15
arr2.reduceRight(function(tot,cur){
	return tot + cur;
}, "")//21umairsyed
arr1.reverse();//[5,4,3,2,1]
arr1.slice(-2)//[2,1]
arr2.sort();//[21,'syed','umair']
arr2.splice(0,1,'syed','yousuff');//[21] is removed and replaced by new elements.
