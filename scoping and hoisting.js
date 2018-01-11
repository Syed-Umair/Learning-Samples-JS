console.log(age);//undefined since variable declaration is hoisted.

name  = 'Random person'; //Global Variable 
var age = 21; //Global Variable
window.gender = 'male'; //global variable

func(); //will call the function since function declaration is hoisted

function func(){
	console.log(a);//undefined, since variable declaration is hoisted
	var a = 23; //local variable
	//innerFunc(); will throw typeerror since function expressions are not hoisted, in other words it is treated as variable.
	console.log(innerFunc);//undefined, hoisted and initialized to undefined.
	var innerFunc = function(){
						console.log(a);//23
						b = 24; //global variable
					}
	innerFunc();
}

//console.log(a); reference error since it is not defined
//innerFunc(); reference error
console.log(b);//24

var a = 10;
function test(a)
{
    a = 20;
    console.log(a);
}
test(a)
console.log(a);