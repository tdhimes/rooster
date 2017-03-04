$(document).ready(function(){

	$("#week").click(function() {
		console.log("success");
		$(this).css("background-color","darkgray");
		$(this).css("border-color","darkgray");
		$("#day").css("background-color","lightgray");
		$("#day").css("borderColor","lightgray");
	});

	$("#day").click(function() {
		console.log("success");
		$(this).css("background-color","darkgray");
		$(this).css("border-color","darkgray");
		$("#week").css("background-color","lightgray");
		$("#week").css("borderColor","lightgray");
	});

	$('#date').datepicker({
	});

});