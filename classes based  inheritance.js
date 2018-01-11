class Employee{
	constructor(id,name,team){
		this.id=id;
		this.name=name;
		this.team=team;
	}

	displayDetails(){
		console.log('id: '+this.id,
			'name: '+this.name,
			'team: '+this.team);
	}
}

var SBTeam = class extends Employee{
	constructor(id,name,type){
		super(id,name,'SwitchBoard');
		this.type=type;
	}

	displayDetails(){
		super.displayDetails();
		console.log('type: '+this.type);
	}
}

class SBDevTeam extends SBTeam{
	constructor(id,name,type,shift_t){
		super(id,name,type);
		this.shift_t=shift_t;
	}

	displayDetails(){
		super.displayDetails();
		console.log('Shift: '+this.shift_t);
		if(this.mentor!=undefined){
			console.log('Mentor: '+this.mentor);
		}
		else if (this.handlingIntern!=undefined) {
			console.log('Handling Interns: '+this.handlingIntern.join());
		}
	}

	static mentorAssignment(intern,mentor){
		intern.mentor = mentor.name;
		if(mentor.handlingIntern == undefined){
			mentor.handlingIntern = [];
		}
		mentor.handlingIntern.push(intern.name)
	}
}

var emp1 = new SBDevTeam(1223,'statham','intern','night');
var emp2 = new SBDevTeam(1233,'george','intern','night');
var emp3 = new SBDevTeam(1234,'jason','regular','night');
SBDevTeam.mentorAssignment(emp1,emp3);
SBDevTeam.mentorAssignment(emp2,emp3);
emp1.displayDetails();
emp2.displayDetails();
emp3.displayDetails();