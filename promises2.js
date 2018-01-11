var c = new Promise(1); //Error
var b = new Promise(function(acc,rej){x=10+a;});
b.then(function(){console.log("success")}).catch(function(e){console.log(e)})
