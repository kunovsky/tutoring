var letter = "o";
$( ".small-4" ).click(function() {
	if($(this).html() === ""){
   	$( this ).text( letter);
		if(letter === "o"){
	  	letter = "x";
		}
		else if(letter ==="x"){
			letter = "o";
		}
	}
});

$( ".button" ).click(function() {
 $('.small-4').html("");
});