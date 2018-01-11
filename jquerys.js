$(function(){
	$(window).on('resize scroll',function(){alert('Browser Events: '+event.type+' Triggered.');$(this).off(event.type)});
	$('header').text("Welcome to JSHOTS!!");
	$('footer').text("JSHOTS Created by Syed Umair");
	$('#initial').text("Click on a topic in the sidebar to read articles about it");
	$('article').prepend('<center></center>');
	$('center').html('<img/>');
	$('img').attr({
		 id: 'load', src: 'img/loading.gif'
	}).css("display","none");

	$('p').hide();
	$('li').mouseenter(function(event) {
		event.target.style.color = 'Red';
		event.target.style.fontStyle = 'Bold';
		$(this).mouseleave(function(event) {
			event.target.style.color = 'black';
		});
	});

	$( 'li' ).on('click',sidebarHandler);

	$("main").hover(function(){
        $(this).css("background-color", "#f2f2f2");
    },
    function(){
        $(this).css("background-color", "#ffffff");
    });
 
	$( 'footer' ).click(function(){
		alert('This is a simple blog that gives you the overview of various terms listed in the sidebar.');
	});

	$('ul').clone(true).appendTo('nav');
	$( "ul" ).wrapInner("<b></b>");
	$( "li" ).wrap("<u></u>");
	$("ul").wrapAll("<center></center>");
	setTimeout(()=>{$('ul').unwrap('center');
		$('ul').remove(':last');
		},2000);


});
function initiate_ajax(id){
	if($('p#'+id)[0] === undefined){
		$.ajax('http://localhost:3000/?content='+id,{
			type: 'GET',
			beforeSend: function(){
				$('#load').toggle();
				$('li').off('click');
				console.log('initiated ajax');
			},
			dataType: 'JSON',
			error: function(xhr,status,error){
				$('#load').toggle();
				$( 'li' ).on('click',sidebarHandler);
				if($('p#error')[0] === undefined)
					$('<p id=error>'+error+' '+xhr.statusText+'.</p>').appendTo('article');
				else
					$('#error').show();
				setTimeout(() => {
				  $('#error').replaceWith(function(){return '<i id ='+id+'>Click Here To Try Again</i>'});
				  $('#tryAgain').on('click', function(){
				  	//$(this).
				  })
				}, 1500);
			},
			success: function(result,status,xhr){
				setTimeout(()=>{
				$('#load').toggle();
				$('h2#initial').text(id).show();
				$('<p id='+id+'>'+result[id]+'</p>').appendTo('article');
				$( 'li' ).on('click',sidebarHandler);},2000);
			}
		})
	}
	else{
		$('h2#initial').text(id).show();
		$('p#'+id).show();
		//$('p#'+id).append()
	}
}

function sidebarHandler(event){
		$("li").show();
		$(event.target).hide();
		$('p, h2').hide();
		initiate_ajax($(event.target).text());
	}