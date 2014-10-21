	var game = new RockPaperScissors;
	var gest = {Rock: new Rock, Paper: new Paper, Scissors: new Scissors}
	var computerGesture = null; 
	var computerChoice = function() {
		var gestures = [new Rock, new Scissors, new Paper];
		computerGesture = gestures[Math.floor(Math.random()* gestures.length)];
		return computerGesture
	}

	$(document).ready(function(){
		// highlights images on mouse over
		$('.choice').on('mouseenter', 'img', function(){
			$(this).addClass("highlight");
		});
		$('.choice').on('mouseleave', 'img', function(){
			$(this).removeClass('highlight');
		});

		var andTheWinnerIs = function(winner) {
			if(winner === 'Draw')
        $('.result').text("It's a " + winner + "! " + "You both chose "+ computerGesture.type + ". Choose again!"); 
      if(winner === playerGesture.type)
        $('.result').text("You win!");
      if(winner === computerGesture.type)
        $('.result').text("You lost!");
   //    else
			// $('.result').text('The Winner is ' + winner + "! ");
		}
	var playerGesture = null
		var playersChoice = function (choice) {
			playerGesture = gest[$(choice).data('gesture')];
		return playerGesture
}

		$("img").on("click", function(){ 
			andTheWinnerIs(game.decideWinnerOf(playersChoice(this), computerChoice()))
	})


	$('img').on("click", function(){	
			$(".player_choice").text("You chose " + playerGesture.type + "!")
		});

		$('img').on("click", function(){
			$(".opp_choice").text("Your opponent chose " + computerGesture.type + "!")
		});


	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	});

