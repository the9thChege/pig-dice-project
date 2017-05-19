//Back-end Logic

var throwdice = function() {
  return Math.floor(6 * Math.random()) + 1;
};

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
}

Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
    alert("Sorry, you rolled a 1! Your turn is over!");
    // this.changeturn();
  } else {
    this.tempscore += this.roll;
  }
}; //if a 1 is rolled then turn ends

Player.prototype.hold = function() {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  // this.changeturn();
  alert("Pass the mouse!" || "Pass!");
}; //Hold

Player.prototype.winnerCheck = function() {
  if (this.totalscore >= 100) {
    alert("You are the winner!");
  }
};

Player.prototype.newGame = function() {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
}; //Starts a New Game

////////////////////////////////////////////////////////////////////////

// UI Logic
$(document).ready(function() {

  $("button#start").click(function(event) {
    player1 = new Player(true);
    player2 = new Player(false);
    $(".playfield").show();
    $(".start").hide();
    alert("Player 1 starts!");
  });

  $("button#new-game").click(function(event) {
    $(".playfield").hide();
    player1.newGame();
    player2.newGame();
    $("#player1Current").empty();
    $("#player1Score").empty();
    $("#player1Streak").empty();
    $("#player2Current").empty();
    $("#player2Score").empty();
    $("#player2Streak").empty();

    $(".start").show();
  });

  $("button#player1Button").click(function(event) {
    player1.roll = throwdice();
    $("#player2Streak").empty();
    $("#player1Streak").text(player1.roll);
    player1.rollone();
    $("#player1Current").text(player1.tempscore);
    $("#player1").css("background-color", "#83db20");
    $("#player2").css("background-color", "grey");
  });

  $("button#player2Button").click(function(event) {
    player2.roll = throwdice();
    $("#player1Streak").empty();
    $("#player2Streak").text(player2.roll);
    player2.rollone();
    $("#player2Current").text(player2.tempscore);
    $("#player2").css("background-color", "#83db20");
    $("#player1").css("background-color", "grey");
  });

  $("button#player1Pass").click(function(event) {
    player1.hold();
    $("#player2").css("background-color", "#83db20");
    $("#player1").css("background-color", "grey");
    $("#player1Score").text(player1.totalscore);
//    $("#player1Current").empty();
    $("#player1Streak").empty();
    player1.winnerCheck();
  });

  $("button#player2Pass").click(function(event) {
    player2.hold();
    $("#player1").css("background-color", "#83db20");
    $("#player2").css("background-color", "grey");
    $("#player2Score").text(player2.totalscore);
//    $("#player2Current").empty();
    $("#player2Streak").empty();
    player2.winnerCheck();
  });
});
