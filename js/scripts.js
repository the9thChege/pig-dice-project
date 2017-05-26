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
  } else {
    this.tempscore += this.roll;
  }
}; //if a 1 is rolled then turn ends

Player.prototype.hold = function() {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
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

  $("button#rules").click(function(event){
    $(".rulesDiv").toggle();
  });

  $("button#start").click(function(event) {
    player1 = new Player(true);
    player2 = new Player(false);
    $(".playfield").show();
    $(".start").hide();
    $(".rulesDiv").hide();
    alert("Player 1 starts!");
    $("#player1").css("background-color", "#83db20");
  });

  $("button#new-game").click(function(event) {
    $(".playfield").hide();
    $(".rulesDiv").hide();
    player1.newGame();
    player2.newGame();
    $("#player1Current").empty();
    $("#player1Score").empty();
    $("#player1Streak").empty();
    $("#player2Current").empty();
    $("#player2Score").empty();
    $("#player2Streak").empty();
    $("#player1").css("background-color", "grey");
    $("#player2").css("background-color", "grey");

    $(".start").show();
  });

  $("button#player1Button").click(function(event) {
    $("#p2_1").hide();
    $("#p2_2").hide();
    $("#p2_3").hide();
    $("#p2_4").hide();
    $("#p2_5").hide();
    $("#p2_6").hide();
    player1.roll = throwdice();
    $("#player2Streak").empty();
    $("#player1Streak").text(player1.roll);
    player1.rollone();
    if (player1.roll === 2) {
      $("#p1_1").hide();
      $("#p1_2").show();
      $("#p1_3").hide();
      $("#p1_4").hide();
      $("#p1_5").hide();
      $("#p1_6").hide();
    } else if (player1.roll === 3) {
      $("#p1_1").hide();
      $("#p1_2").hide();
      $("#p1_3").show();
      $("#p1_4").hide();
      $("#p1_5").hide();
      $("#p1_6").hide();
    } else if (player1.roll === 4) {
      $("#p1_1").hide();
      $("#p1_2").hide();
      $("#p1_3").hide();
      $("#p1_4").show();
      $("#p1_5").hide();
      $("#p1_6").hide();
    } else if (player1.roll === 5) {
      $("#p1_1").hide();
      $("#p1_2").hide();
      $("#p1_3").hide();
      $("#p1_4").hide();
      $("#p1_5").show();
      $("#p1_6").hide();
    } else if (player1.roll === 6) {
      $("#p1_1").hide();
      $("#p1_2").hide();
      $("#p1_3").hide();
      $("#p1_4").hide();
      $("#p1_5").hide();
      $("#p1_6").show();
    } else if (player1.roll === 1) {
      $("#p1_1").show();
      $("#p1_2").hide();
      $("#p1_3").hide();
      $("#p1_4").hide();
      $("#p1_5").hide();
      $("#p1_6").hide();
    }
    $("#player1Current").text(player1.tempscore);
    $("#player1").css("background-color", "#83db20");
    $("#player2").css("background-color", "grey");
  });

  $("button#player2Button").click(function(event) {
    $("#p1_1").hide();
    $("#p1_2").hide();
    $("#p1_3").hide();
    $("#p1_4").hide();
    $("#p1_5").hide();
    $("#p1_6").hide();
    player2.roll = throwdice();
    $("#player1Streak").empty();
    $("#player2Streak").text(player2.roll);
    player2.rollone();
    if (player2.roll === 2) {
      $("#p2_1").hide();
      $("#p2_2").show();
      $("#p2_3").hide();
      $("#p2_4").hide();
      $("#p2_5").hide();
      $("#p2_6").hide();
    } else if (player2.roll === 3) {
      $("#p2_1").hide();
      $("#p2_2").hide();
      $("#p2_3").show();
      $("#p2_4").hide();
      $("#p2_5").hide();
      $("#p2_6").hide();
    } else if (player2.roll === 4) {
      $("#p2_1").hide();
      $("#p2_2").hide();
      $("#p2_3").hide();
      $("#p2_4").show();
      $("#p2_5").hide();
      $("#p2_6").hide();
    } else if (player2.roll === 5) {
      $("#p2_1").hide();
      $("#p2_2").hide();
      $("#p2_3").hide();
      $("#p2_4").hide();
      $("#p2_5").show();
      $("#p2_6").hide();
    } else if (player2.roll === 6) {
      $("#p2_1").hide();
      $("#p2_2").hide();
      $("#p2_3").hide();
      $("#p2_4").hide();
      $("#p2_5").hide();
      $("#p2_6").show();
    } else if (player2.roll === 1) {
      $("#p2_1").show();
      $("#p2_2").hide();
      $("#p2_3").hide();
      $("#p2_4").hide();
      $("#p2_5").hide();
      $("#p2_6").hide();
    }
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
