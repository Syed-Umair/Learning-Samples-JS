var deferred_obj = Promise.defer(); //returns a object with promise under 
							//pending state and with resolve and reject methods.
console.log(deferred_obj);
console.log(deferred_obj.promise);
a =10;
if(a === 10)
	deferred_obj.resolve(a);
else
	deferred_obj.reject('error');

deferred_obj.promise.then((v)=>console.log(v)).catch((e)=>console.log(e));
