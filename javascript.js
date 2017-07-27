function main (){
	$('.livro').mouseover(function(){
		$(this).fadeTo('fast', 0.5);
	});
	$('.livro').mouseleave(function(){
		$(this).fadeTo(50, 1);
	});
	$('#menuBar ul li').mouseover(function (){
		$(this).fadeTo('fast', 0.5);
	});
	$('#menuBar ul li').mouseleave(function (){
		$(this).fadeTo(10, 1);
	});
	$('.bookOptions').mouseover(function(){
		$(this).fadeTo('fast', 0.5);
	});
	$('.bookOptions').mouseleave(function(){
		$(this).fadeTo(10, 1);
	});
}

$(document).ready(main);