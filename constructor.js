//program for default behaviour of constructor without this keyword

function Employee(id, name, age, type, dept)
{
	this.id = id;
	this.name = name;
	this.age = age;
	this.type = type;
	this.dept = dept;
}

function EmployeeWithoutThis(id, name, age, type, dept)
{
	id = id;
	name = name;
	age = age;
	type = type;
	dept = dept;
}

var emp1 = new Employee(105556,'syed',21,'intern','SB');
var emp2 = new EmployeeWithoutThis(105557,'umair',21,'regular','SB');
console.log(emp1,emp2); //Employee {id: 105556, name: "syed", age: 21, type: "intern", dept: "SB"}
//EmployeeWithoutThis {} 