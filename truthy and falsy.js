if(NaN||null||false||0||undefined||"")
{
	console.log('truthy values');
}
else{
	console.log('falsy values');
}

if (-1&&true&&function(){}&&Object&&[]&&{}&&Infinity){
	console.log("truthy")
}