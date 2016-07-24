var COLORS = ["color1","color2","color3","color4"];
var squaresToSwap = [];

// four rows
// each row has a randomized set of colors
// timed game
// highest score
// when a row or columb of colors is cleared add a new set of colors

function startGame() {
  var colors = []
  var squares =  $(".square");

  for (var i = 0; i < 4; i++){
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

$(".square").click(function(event){
  var id = $(event.target).attr('id');
  squaresToSwap.push(id);
  if (squaresToSwap.length === 2){
    var squareOne = $("#" + squaresToSwap[0]);
    var squareTwo = $("#" + squaresToSwap[1]);
    var squareOneClasses = squareOne.attr("class");
    var squareTwoClasses = squareTwo.attr("class");

    $(squareOne).removeClass(squareOneClasses);
    $(squareTwo).removeClass(squareTwoClasses);

    $(squareOne).addClass(squareTwoClasses);
    $(squareTwo).addClass(squareOneClasses);

    squaresToSwap = [];

    checkGameForWinner();
  }
});

function checkGameForWinner() {
  var won = true;
  var rows = $(".row");

  for (var i = 0; i< rows.length; i++) {
    var row = rows[i];
    var classes = $(row.children[0]).attr('class')
    for (var j = 0; j < row.children.length; j++) {
      if ($(row.children[j]).attr('class') !== classes) {
        won = false;
      }
    }
  }

  if (won) {
    alert("you win!")
  }
}
