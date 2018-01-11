// overriding original Promise.prototype.then/catch just to add some logs
(function(Promise){
    var originalThen = Promise.prototype.then;
    var originalCatch = Promise.prototype.catch;
    
    Promise.prototype.then = function(){
        console.log('> > > > > > called .then on %o with arguments: %o', this, arguments);
        return originalThen.apply(this, arguments);
    };
    Promise.prototype.catch = function(){
        console.log('> > > > > > called .catch on %o with arguments: %o', this, arguments);
        return originalCatch.apply(this, arguments);
    };

})(this.Promise);



// calling catch on an already resolved promise
Promise.resolve().catch(function XXX(){});
