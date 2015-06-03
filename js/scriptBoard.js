$(function(){
	// == PROGRESS BAR ==
	var alpha = $('#alpha');
	var epsilon = $('#epsilon');
	var phi = $('#phi');
	var omega = $('#omega');

	var maxBarWidth = 30;

	$(document).ready(actualiser);
	setInterval(actualiser, 30000);

	var dot = false;
	function actualiser(){
		$.get("http://localhost/conf/compteur.php", function(data){
			alpha.find('.score').html(data.alpha);
			epsilon.find('.score').html(data.epsilon);
			phi.find('.score').html(data.phi);
			omega.find('.score').html(data.omega);
		});	
	}

	$('.confrerie').on('click', function(){
		var self = $(this);
		$.post('http://localhost/conf/compteur.php', {"team": this.id}, function(){
			var score = parseInt(self.find('.score').html());
			self.find('.score').html(score+1);
		});
	})
});