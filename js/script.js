$(function(){
	// == PROGRESS BAR ==
	var alpha = $('#alpha');
	var epsilon = $('#epsilon');
	var phi = $('#phi');
	var omega = $('#omega');

	var maxBarWidth = 30;

	$(document).ready(actualiser);
	setInterval(actualiser, 3000);

	var dot = false;
	function actualiser(){
		$.get("http://localhost/conf/compteur.php", function(data){
			alpha.find('.score').html(data.alpha);
			epsilon.find('.score').html(data.epsilon);
			phi.find('.score').html(data.phi);
			omega.find('.score').html(data.omega);

			for(var i in data){
				data[i]+=5;
				if(data[i] > maxBarWidth) data[i] = maxBarWidth;
				data[i]+= '%';
			}

			alpha.width(data.alpha);
			epsilon.width(data.epsilon);
			phi.width(data.phi);
			omega.width(data.omega);

		});	
	}
});