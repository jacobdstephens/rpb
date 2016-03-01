$("#play").click(function() { var val = $('input[type=radio]:checked').val();
$('p').text("You played " + val );
});