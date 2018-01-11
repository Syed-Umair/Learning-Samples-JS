var content = {
  "Emp1": 
  { 
    "name": "boston",
    "age": "21",
    "id": "1234",
    "type": "Postintern"
  },
  "Emp2": 
  { 
    "name": "king",
    "age": "22",
    "id": "1235",
    "type": "Postintern"
  }
}  
req("data/EMPDetails.json", calls, null, "GET");
req("http://httpbin.org/post", display, content, "POST");
req("http://httpbin.org/patch", display, content, "PATCH");
req("http://httpbin.org/delete", display, content, "DELETE");


function req(url, callBack, data, method) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log("invoked");
    if (this.readyState == 0){console.log("request not initialized");}
    if (this.readyState == 1){console.log("server connection established");}
    if (this.readyState == 2){console.log("request received");}
    if (this.readyState == 3){console.log("processing request");} 
    if (this.readyState == 4 && this.status == 200) {
        console.log("request finished and response is ready");
        callBack(this);
    }
  };
  xhttp.open(method, url, true);
  xhttp.send(JSON.stringify(data));  
}


function calls(xhttp) {
  var a = JSON.parse(xhttp.response);
  console.log(a);
  console.log(a.Emp1.name,a.Emp1.type);
  console.log(a.Emp2.name,a.Emp2.type);
}

function display(xhttp) {
  var a = JSON.parse(xhttp.response);
  console.log(a);
  console.log(a.json.Emp1.name,a.json.Emp1.type);
  console.log(a.json.Emp2.name,a.json.Emp2.type);
}
//syed regular
//statham regular
//boston intern
//king intern