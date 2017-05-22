$( document ).ready(function(){
  
  	var number = Math.floor((Math.random() * 102) + 19);
	var diamond = Math.floor((Math.random() * 12) + 1);
	var oynx = Math.floor((Math.random() * 12) + 1);
	var sapphire = Math.floor((Math.random() * 12) + 1);
	var emerald = Math.floor((Math.random() * 12) + 1);
	var score = 0;
	var wins = 0;
	var losses = 0;

	$("#randomNumber").html(number);

	$("#diamond").click(function() {
		update(diamond);
		console.log(diamond);
	});
	$("#oynx").click(function() {
		update(oynx);
		console.log(oynx);
	});
	$("#sapphire").click(function() {
		update(sapphire);
		console.log(sapphire);
	});
	$("#emerald").click(function() {
		update(emerald);
		console.log(emerald);
	});

	function reset() {
		
		number = Math.floor((Math.random() * 102) + 19);
		$("#randomNumber").html(number);

		diamond = Math.floor((Math.random() * 12) + 1);
		oynx = Math.floor((Math.random() * 12) + 1);
		sapphire = Math.floor((Math.random() * 12) + 1);
		emerald = Math.floor((Math.random() * 12) + 1);

		score = 0;
		$("#yourScore").html(score);
	};

	function update(gem) {
	
		score += gem;
		$("#yourScore").empty(score);
		$("#yourScore").append(score);

		if (score > number) {
			losses++;
			$("#losses").html(losses);
			reset();
		} else if (score === number) {
			wins++;
			$("#wins").html(wins);
			reset();
		};
	};
});