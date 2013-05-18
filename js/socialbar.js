$(document).ready(function() {
	
	// vedo quanti elementi div.social_container vi sono
	var max = $("li").length;
	console.log("max: " + max);
	
	$('#socialbar li').mouseover(function(){
		
		// prendo l'indice dell'oggetto su cui si è col mouse
		var index = $("li").index(this);
		var ind = index;
		console.log("index: " + index);
				
		// per i dall'indice successivo a quello in cui si è fino a max
		for (i = index+1; i <= max; i++) {
			//console.log("index: " + index);
			
			//verifico se i è dispari
			var isOdd = IsOdd(i);
			console.log(i+">"+isOdd);
			
			// si invertono classi left-right per tutti gli indici successivi.
			if (isOdd) {
				$('ul#socialbar li:nth-child(' + i + ')').css('transform', 'skew(0deg, -20deg)');
				$('ul#socialbar li:nth-child(' + i + ')').css('-ms-transform:', 'skew(0deg, -20deg)');
				$('ul#socialbar li:nth-child(' + i + ')').css('-webkit-transform', 'skew(0deg, -20deg)');
				$('ul#socialbar li:nth-child(' + i + ')').css('margin', '0');
			} else {
				$('ul#socialbar li:nth-child(' + i + ')').css('transform', 'skew(0deg, 20deg)');
				$('ul#socialbar li:nth-child(' + i + ')').css('-ms-transform:', 'skew(0deg, 20deg)');
				$('ul#socialbar li:nth-child(' + i + ')').css('-webkit-transform', 'skew(0deg, 20deg)');
				$('ul#socialbar li:nth-child(' + i + ')').css('margin', '0');
			}
		}
		
		// per i da 0 a quello prima di quello in cui si è
		for (i = 1; i <= index; i++) {
			//console.log("index: " + index);
			
			//verifico se i è dispari
			var isOdd = IsOdd(i);
			console.log(i+">"+isOdd);
			
			// si invertono classi left-right per tutti gli indici successivi.
			if (isOdd) {
				$('ul#socialbar li:nth-child(' + i + ')').css('transform', 'skew(0deg, 20deg)');
				$('ul#socialbar li:nth-child(' + i + ')').css('-ms-transform:', 'skew(0deg, 20deg)');
				$('ul#socialbar li:nth-child(' + i + ')').css('-webkit-transform', 'skew(0deg, 20deg)');
				$('ul#socialbar li:nth-child(' + i + ')').css('margin', '0');
			} else {
				$('ul#socialbar li:nth-child(' + i + ')').css('transform', 'skew(0deg, -20deg)');
				$('ul#socialbar li:nth-child(' + i + ')').css('-ms-transform:', 'skew(0deg, -20deg)');
				$('ul#socialbar li:nth-child(' + i + ')').css('-webkit-transform', 'skew(0deg, -20deg)');
				$('ul#socialbar li:nth-child(' + i + ')').css('margin', '0');
			}
		}
		
		
		// metto in orizzontale il div su cui è il mouse
		$(this).css('transform', 'skew(0deg, 0deg)');
		$(this).css('-ms-transform:', 'skew(0deg, 0deg)');
		$(this).css('-webkit-transform', 'skew(0deg, 0deg)');
		
		if (IsOdd(ind)) {
			$(this).css('margin', '0');
			$(this).css('margin-top', '13');
		}  else {
			$(this).css('margin', '0');
			$(this).css('margin-top', '-13');
		}
	});
	
	
	$('.social_container').mouseout(function(){
		
	});
	
	
	
	
	
	/*
		* ritorna true se il numero è dispari
	*/
	function IsOdd(numero) {
		if (isNaN(numero) == false)
		{
			return (numero %2 == 1 ?  true : false);
		}
		else
		{
			return null;
		}
	}
	
});