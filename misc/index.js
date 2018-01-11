//Input Supplied

var shape = [
{ key: 'name', value: 'Andrew' },
{ key: 'age', value: 'Young' },
{ key: 'food', value: 'Pizza' },
{ key: 'kids', value: 'Twins' },
{ key: 'garbageA', value: 'TrashA' },
{ key: 'garbageB', value: 'TrashB' },
{ key: 'garbageC', value: 'TrashA' },
{ key: 'garbageD', value: 'TrashB' },
{ key: 'garbageE', value: 'TrashA' },
{ key: 'garbageF', value: 'TrashB' },
{ key: 'garbageG', value: 'TrashA' },
{ key: 'garbageH', value: 'TrashB' },
{ key: 'garbageI', value: 'TrashA' },
{ key: 'garbageJ', value: 'TrashB' },
];

//Output v1
/*
var opstring = "{ "
for (var i = 0; i < shape.length - 2; i++) {
  opstring += "\"" + shape[i].key + "\": " + "\"" + shape[i].value + "\"" + ", ";
}
opstring = opstring.substring(0, opstring.length - 2);`
opstring +=" }";
opstring = JSON.parse(opstring);
document.write(JSON.stringify(opstring));
console.log(opstring);
*/
//document.write(shape[4].key);

//
/*for(var i=0;i<shape.length;i++)
{
  var str=shape[i].key;
  if(!str.includes("garbage"))
  {
    document.write(str+"<br>");
  }
}*/

//v2

/*
//Function to remove garbage property from Inputs

shape = shape.filter(function(shape){
  if(!shape.key.includes("garbage"))
  return shape;
});

//Function to convert the array to single object.

var op = shape.reduce(function(obj,item){
        obj[item.key] = item.value;
        return obj;
    },{});
console.log(op);
document.write(JSON.stringify(op));

*/



//v3
/*


var op = shape.reduce(function(obj,item){
        if(!item.key.includes("garbage")){
        obj[item.key] = item.value;
      }
        return obj;
    },{});
    console.log(op);
    document.write(JSON.stringify(op));
*/

//v4

/*

var obj = shape.filter(function(shape){
              if(!shape.key.includes("garbage"))
              return shape;
            }).reduce(function(obj,item){
                  obj[item.key] = item.value;
          return obj;
    },{});

*/


shape
.filter( obj => !obj.key.includes('garbage')).reduce( (acc,curr) => {
return {
...acc,
curr.key:curr.value
};
} ,{});
console.log(shape);
document.write(JSON.stringify(shape));
