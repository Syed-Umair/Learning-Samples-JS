var dt = new Date;
var EmpID = parseInt(dt.getFullYear().toString()+dt.getMonth().toString()+"000");
function genEmpID() {
    ++EmpID;
    return new Promise(function(acc, rej){
            console.log("Generating new Employee ID...");
            setTimeout(
                function() {
                    acc(EmpID);
                }, Math.random() * 2000 );
        }
    );
}
    
var emp1 = genEmpID();

    emp1.then(
        function(id) {
            console.log("Employee id for Person 1:"+id);
            return genEmpID();
        })
    .then(
        function(id) {
            console.log("Employee id for Person 2:"+id);
            return genEmpID();
        })
    .then(
        function(id) {
            console.log("Employee id for Person 3:"+id);
            return new Promise(function(acc,rej){
                    rej("testing error in promise");
            })
        })
    .then(function(){console.log("success");})
    .catch(
       (reason) => {
            console.log(reason);
        });