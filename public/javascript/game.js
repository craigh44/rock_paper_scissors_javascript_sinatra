	var game = new RockPaperScissors;
	var gest = {rock: new Rock, paper: new Paper, scissors: new Scissors}
	var computer = function() {
		var gestures = [new Rock, new Scissors, new Paper];
		return gestures[Math.floor(Math.random()* gestures.length)];
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
			$('h2').text('The winner is ' + winner);
		}

		var playersChoice = function (choice) {
			return gest[$(choice).data('gesture')];

		}



		$("img").on("click", function(){ 
			andTheWinnerIs(game.decideWinnerOf(playersChoice(this), computer()))
	})

	});

