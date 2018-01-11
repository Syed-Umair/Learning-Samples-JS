arr = [{},{},{},{},{}];

for(i=0;i<arr.length;i++){
	arr[i].id = i;
	arr[i].showId = function(){
		console.log(i)
	}
}
console.log(arr);
arr[0].showId();