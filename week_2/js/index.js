//  Javascript goes here

$('#info').submit(function(event) {
  event.preventDefault();

  var data = $('#info').serializeArray();

  for(var i = 0; i < data.length; i++) {
    $('.results').append('<div class="result-element columns small-6"> <div class="result-label success">' + data[i].name + '</div>' + '<div class="result-value">' + data[i].value + '</div>' + '</div>');
  }
});
