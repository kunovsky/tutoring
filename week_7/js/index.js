$( document ).keypress(function(event) {
 if(event.which === 112){
	var currentSquare = $(".active-p1");
	currentSquare.removeClass("active-p1").next().addClass("active-p1");

 }
 if(event.which === 113){
 	var currentSquare = $(".active-p2");
 	currentSquare.removeClass("active-p2").next().addClass("active-p2");
 }
});
