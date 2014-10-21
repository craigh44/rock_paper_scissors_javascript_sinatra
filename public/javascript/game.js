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
			$('.result').text('The winner is ' + winner);
		}

		var playersChoice = function (choice) {
			return gest[$(choice).data('gesture')];
		}



		$("img").on("click", function(){ 
			andTheWinnerIs(game.decideWinnerOf(playersChoice(this), computerChoice()))
	})


	$('img').on("click", function(){	
			$(".player_choice").text("You chose " + ($(this).data('gesture')))
		});

		$('img').on("click", function(){
			$(".opp_choice").text("Your opponent chose " + computerGesture.type)
		});

	});

