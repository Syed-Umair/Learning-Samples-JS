//Object.create()
var a ={
	val: 10,
	printval: function(){
		console.log(this.val);
	}
};

var b = Object.create(a, {val: {value:30}});//b inherits from a and has its own property 
//called val and its prototype is set to a
b.printval();//30


//Prototypal Inheritance
function Employee(id, name, age, gender, type){
	this.id = id;
	this.name = name;
	this.age = age; 
	this.gender = gender;
	this.type = type;
}

Employee.prototype.greet = function(greet_style){
	console.log(`${greet_style}! I am ${name}, ${age} years old and ${type} at FULL`);
};

function Intern(id, name, age, gender, type, greet_style, team){
	Employee.call(this, id, name, age, gender, type);
	this.team = team;
	this.internshipPeriod = '3 Months';
	this.greet_style =greet_style;
}

Intern.prototype.returnTeam = function(){
	console.log(this.team); 
};

Intern.prototype = Object.create(Employee.prototype);//or Intern.prototype = new Employee();
//will now inherit all the methods available on Employee.prototype. and will replace the existing methods in intern.prototype
Intern.prototype.constructor = Intern;//should return Intern(), as desired, plus we are now inheriting from Employee().


function Developer(id, name, age, gender, type, greet_style, team, designation){
	Intern.call(this, id, name, age, gender, type, greet_style, team);
	//greet: Employee.greet.bind(this,greet_style);
	this.designation = designation;

}

Developer.prototype = Object.create(Intern.prototype);//or Developer.prototype = new Intern();
//will now inherit all the methods available on Intern.prototype.
Developer.prototype.constructor = Developer;//should return Developer(), as desired, plus we are now inheriting from Intern().

d1 = new Developer();
console.log(d1 instanceof Developer);//true
console.log(d1 instanceof Intern);//true
console.log(d1 instanceof Employee);//true

//
