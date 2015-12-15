$(document).ready(function() {
	login();
	createGroup();
});

function login() {
	$('.loginbox').hide();
	$('.login').click(function() {
	$('.loginbox').toggle( 200 );
	});
};

function createGroup() {
	$('.createbox').hide();
	$('.create').click(function() {
	$('.createbox').toggle( 200 );
	});
};
