var COLORS = ["color1","color2","color3","color4"]
// four rows
// each row has a randomized set of colors
// timed game
// highest score
// when a row or columb of colors is cleared add a new set of colors

function startGame() {
  var colors = []
  var squares =  $(".square");

  for (var i = 0; i< 4; i++){
    COLORS.forEach(function(color) {
      colors.push(color);
    })
  }

  colors = _.shuffle(colors);

  for (var i = 0; i<= squares.length; i++) {
    var currentSquare = squares[i];
    var currentColor = colors[i];
    $( currentSquare ).addClass( currentColor );
  }
}

startGame()
