function H1B_VISA(x) {
  return new Promise(function(resolve,reject){
    var tim = Math.random() * 2000;
	console.log(tim);
	setTimeout(function(){
      resolve(x);
    },tim);
  });
}

async function genVisaChances() {
  var a = H1B_VISA(20);
  var b = H1B_VISA(30);
  return a;
}
function call(){
 genVisaChances().then(function(v){
	console.log("The chances of getting H1B_VISA is "+v+"%");
}).catch(function(){
	console.log("Sorry you are Unlucky!!");
});
}