(function(){
	console.log('INVOKED IMMEDIATELY');
})();

var even=(function(){
	var x = 2;
	return function(b){
		if (b%x==0)
		console.log('even');
		else
			console.log('odd');
	}
})();
even(50);