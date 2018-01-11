var xhttp = new XMLHttpRequest();// using XMLHttpRequest as global object

function calls(xhttp) {
  var a = JSON.parse(xhttp.response);
  console.log(a.Emp1.name,a.Emp1.type);
  console.log(a.Emp2.name,a.Emp2.type);
}

function loadDoc(fno,url, callBack) {
	console.log("processing for function "+url);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 0){console.log("request not initialized (function-"+fno+")");}
    if (this.readyState == 1){console.log("server connection established (function-"+fno+")");}
    if (this.readyState == 2){console.log("request received (function-"+fno+")");}
    if (this.readyState == 3){console.log("processing request (function-"+fno+")");} 
    if (this.readyState == 4 && this.status == 200) {
    	console.log("request finished and response is ready (function-"+fno+")");
        callBack(this);
    }
  };
  xhttp.open("GET", url, true);

  xhttp.send();

}

loadDoc(1,"data/EMPDetails.json", calls);// this call makes the XHR request
loadDoc(2,"data/InternDetails.json", calls);// this call overwrites the previous xhttp object

//solving above asynchronous problem using promises.
/*
var xhttp2 = new XMLHttpRequest();// using XMLHttpRequest as global object

function loadDocUsingPromises(fno,url, callBack){
	return new Promise(function(resolve,reject){
		console.log("processing for function "+fno);
		xhttp2.onreadystatechange = function() {
    	if (this.readyState == 0){console.log("request not initialized (function-"+fno+")");}
    	if (this.readyState == 1){console.log("server connection established (function-"+fno+")");}
    	if (this.readyState == 2){console.log("request received (function-"+fno+")");}
    	if (this.readyState == 3){console.log("processing request (function-"+fno+")");} 
    	if (this.readyState == 4 && this.status == 200) {
    	console.log("request finished and response is ready (function-"+fno+")");
        callBack(this);
        resolve();
    }
  };
  xhttp2.open("GET", url, true);
  xhttp2.send();

	});
}*/

//loadDocUsingPromises(1,"data/EMPDetails.json", calls)
//.then(()=>{return loadDocUsingPromises(2,"data/InternDetails.json", calls)})
//.then(()=>{console.log("successfully loaded using promise")})
//.catch((e)=>{console.log(e)});