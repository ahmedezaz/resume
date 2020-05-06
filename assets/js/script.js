//Ajax Page load
$(document).ready(function(){
	//initial
	$('#content').load('././files/index.html');

	//handle
	$('ul#nav li a').click(function(){
		var page = $(this).attr('href');
		$('#content').load('././files/' + page + '.html');
		return false;

		
	});


        
});

//Ajax Page Load