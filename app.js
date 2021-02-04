// cette fonction test si tous les champs de type 'input' sont bien remplis
function enableOrDisableButton() {
	$('button').prop('disabled', false);
	
	$('input').each(function(index){
		if($(this).val() == "") {
			$('button').prop('disabled', 'true');
		}
	});
};

$('textarea').keydown(function() {
	var content = $('textarea').val();
	var num_words = content.split(' ').length;
	var num_chars = content.length;
	
	$('p').text(num_words + ' mot(s) | ' + num_chars + ' caractere(s) / 200');
	
	if(num_chars > 200) {
		$('p').css('color', 'red');
		$('button').prop('disabled', true);
	} else {
		$('p').css('color', 'black');
		enableOrDisableButton();
	}
});

// à chaque fois que j'écris dans 'input' je test si on active le bouton "envoyer"
$('input').each(function(index){
	$(this).keydown(function() {
		enableOrDisableButton();
	})
});

$('button').click(function(){
	$('form').css('visibility', 'hidden');
	$('body').text('merci ' + $('#prenom').val() + ', votre message a bien été envoyé !');
});
