$("#target").submit(function( event ){
	event.preventDefault();
	var data = $(this).serializeArray();
  for(var i = 0; i < data.length; i++){
  $(".results").append("<div class='columns small-6'>" + 
  											"<div class='input-name'>" +  data[i].name + " </div>" +
  											"<div class='input-value'>" +  data[i].value + " </div>" +
  										 "</div>");
  }
});;
