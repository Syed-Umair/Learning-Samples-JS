/*
function calls(url,method,async,cachee,glbl,ctype,tout,ctxt,dat = null){
	return $.ajax(url,{
		method: method,
		async: async,
		dataType: 'JSON',
		cache: cachee,
		global: glbl,
		contentType: ctype,
		context: ctxt,
		timeout: tout,
		statusCode: {
			404: ()=>console.log('Not Found!'),
			403: ()=>console.log('Forbidden!'),
			200: ()=>console.log('OK!'),
			500: ()=>console.log('Internal Server Error'),
			408: ()=>console.log('Request Timeout')
		},
		data: dat, 
		beforeSend: function(){
			console.log('initiated ajax: beforeSend',$(this));
		},
		error: function(xhr,status,error){
			console.log(error,status+' :error');
		},
		success: function(result,status,xhr){
			console.log(result,status+' :success');
		},
		complete: function(xhr,status){
			console.log(status+' :complete');
		}
		});
}
var x = calls('http://www.httpbin.org/get','GET',false,
	false,false,false,0,document); 
x.then(function(){
	console.log('successfully completed!, Initiating next ajax call');
	return calls('http://www.httpbin.org/get','GET',true,true,false,false,0,document);
	},
	function(){
		console.log('sorry failed!!');
	})
	.done(()=>{console.log('success 2nd ajax call!!');
		return calls('http://www.httpbin.org/post','POST',true,false,true,'application/json',1,window,{'calls':'3'});
	})
	.fail(function(){
		console.log('sorry failed!!');
	})
	.always(function(datajqXHR, textStatus, jqXHRerrorThrown){
		console.log(datajqXHR, textStatus, jqXHRerrorThrown );
	});

$(document).ajaxStart(function() {
	console.log('global ajax start');
});
$(document).ajaxSend(function() {
	console.log('global ajax send');
});
$(document).ajaxSuccess(function() {
	console.log('global ajax success');
});
$(document).ajaxError(function() {
	console.log('global ajax error');
});
$(document).ajaxComplete(function() {
	console.log('global ajax complete');
});
$(document).ajaxStop(function() {
	console.log('global ajax stop');
});
*/
//short hands

$.get('http://www.httpbin.org/get', null,
	function(data){
			console.log('$.get success: ',data);
		},'json');
$.getJSON('http://www.httpbin.org/get' , null).done((data)=>{
	$.each(data,
		(key,val)=>console.log(`${key} : ${val}`));
		console.log('$.getJSON Success')});
$.getScript( "test.js", function( data, textStatus, jqxhr ) {
  console.log( data );
  console.log( textStatus );
  console.log( jqxhr.status );
  console.log( "$.getScript Success" );
});
$.post('http://www.httpbin.org/post', {'post': 'test'},
	function(data){
			console.log('$.post success: ',data.form);
		},'json');
$('html').load( "jquery.html", function() {
  		alert( "Load was performed." );
	});
