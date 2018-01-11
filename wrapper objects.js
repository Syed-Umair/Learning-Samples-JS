var str1 = 'syed';//primitive type string.
str1.length = 100;//sets 100 to temporary wrapper object.
str1.length;//4
str1.randomKey = 1234;//sets 1234 to temporary wrapper object.
str1.randomKey;//undefined since the temporary wrapper object gets destroyed. 
str1.indexOf('e',3);//-1,since the checking started after the index of 'e'
//the length, indexOf is method of string object 
//so the str1 is temporarily coverted to object called wrapper object and 
//then after method is performed it is converted to primitive again

//Explicit wrapper object

var str2 = new String(str1);
str2.color = 'green';
str2['I am String Object'] = true;
console.log(str2);
console.log(str1==str2);//true, since they have same value.
console.log(str1===str2);//false, since they are of different types.