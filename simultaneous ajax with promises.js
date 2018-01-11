var a = loadDoc(1,"https://httpbin.org/post", {emp1: 'syed', emp2: 'statham', type:'interns'});
var b = loadDoc(2,"https://httpbin.org/post", {emp1: 'boston', emp2: 'umair', type:'regulars'});

function loadDoc(fno,url,data) {
var xhttp = new XMLHttpRequest();
return new Promise((acc,rej)=>{
console.log("processing for function "+fno);
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
console.log("request finished and response is ready (function-"+fno+")");
acc(JSON.parse(xhttp.response));
}
};
xhttp.open("POST", url, true);
xhttp.send(JSON.stringify(data));
});
}

Promise.all([a,b])
.then((values)=>{
console.log(values);
values.forEach((cur) => console.log(`${cur.json.emp1} and ${cur.json.emp2} are ${cur.json.type}`));
})
.catch((e)=>{console.log(e)});