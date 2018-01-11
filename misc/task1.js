//Inputs

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

//Function to remove garbage property from Inputs
/*
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

shape =  shape.reduce(function (obj,el){
    !el.key.includes('garbage')    =>   obj[el.key]: el.value;
}.{});

console.log(shape);