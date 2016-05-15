var urls = [];

$( "#monkey" ).submit(function( event ) {
  event.preventDefault();
   var formData = $( this ).serializeArray()[0];
   urls.push({original: formData.value, shortened: shortenUrl()})
  //  console.log(urls);
  //  shorten the url
  // add the url to our colleciton of urls
  // append the entire collection of urls to the page
  displayurlsonpage()

});


function shortenUrl() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for( var i=0; i < 5; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
  }




function displayurlsonpage() {
  for (var i = 0; i <= urls.length; i++) {
    if (urls[i]) {
      $('#shortened-url').append('<a href=http://www.' +urls[i]['original']  + '>' + urls[i]['shortened'] + '</a>')
    }
  }
}
