$(document).ready(function(){
	$('#action_menu_btn').click(function(){
		$('.action_menu').toggle();
	});
});

function togglePopup(){
	document.getElementById("popup-1").classList.toggle("active");
}