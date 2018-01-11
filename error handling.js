function errorHandling(){
try {

try {
	throw new Error('inner try block');
} 
finally {
	console.log('inner finally block overwrites the throw by return statement');//2
	return 0;
}

}

catch(e) {
	console.log(e);
}

}

try {
	console.log('initialized and calling function');//1
	errorHandling();
	throw 'outer try block';
} catch(e) {
	console.log(e);//outer try block(3)
} finally {
	console.log('Terminated');//terminated(4)
}

