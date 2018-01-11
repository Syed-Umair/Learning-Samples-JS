function timer(brk,lunch){
	return this.clkout-this.clkin+brk+lunch;
}

var obj1 = {
	clkin: 2,
	clkout: 12
};

var obj2 = {
	clkin: 4,
	clkout: 12
};

console.log(timer.bind(obj1,1)/*bind returns new method*/.call(this,0.5));//11.5
console.log(timer.bind(obj2,.5)/*bind returns new method*/.apply(this,[.5]));//9