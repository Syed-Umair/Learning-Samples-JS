$(document).ready(function(){
	$( '*' ).add( [ document, window ] ).on( 'click', function( event ) {
  event.preventDefault();
  console.log( this );
});
});